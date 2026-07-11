// scripts/derive-equipment-dry-run.js
//
// Simulação a seco da Fase 3 do motor de derivação de tags: equipment: (data/derivation-dict.js,
// export EQUIPMENT). NÃO altera nenhum arquivo, NÃO roda no navegador — ferramenta de auditoria
// pra rodar via `node scripts/derive-equipment-dry-run.js`.
//
// Deriva de `steps` (não de `ingredients`) — casamento por palavra inteira, sem substring, mesma
// disciplina do DICT das Fases 1-2, incluindo mascaramento de falso-amigo (`ff`) por entrada.
// Uma receita pode bater em mais de um equipment: simultaneamente (dado multi-valorado); a
// faceta na UI que vai consumir isso na Fase 3.2 é seleção única (dropdown como
// País/Complexidade/Tempo), mas isso é só a UI — aqui só reporta o dado bruto.
//
// equipment:air-fryer tem uma segunda via condicional: os mesmos ROAST_VERBS que disparam
// equipment:forno também disparam equipment:air-fryer, mas só quando o yield da receita indica
// porção pequena (<= AIRFRYER_MAX_YIELD, usando o MAIOR número do texto de yield).

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

const {
  EQUIPMENT,
  ROAST_VERBS,
  AIRFRYER_MAX_YIELD,
  AIRFRYER_YIELD_POSITIVE,
  AIRFRYER_YIELD_NEGATIVE,
  norm,
} = require(path.join(DATA_DIR, "derivation-dict.js"));

function loadRecipes() {
  const sandbox = { window: {} };
  fs.readdirSync(DATA_DIR)
    .filter((f) => f !== "derivation-dict.js")
    .forEach((f) => {
      const code = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
      // eslint-disable-next-line no-new-func
      new Function("window", code)(sandbox.window);
    });
  const flat = [];
  Object.keys(sandbox.window.RECIPES || {}).forEach((catId) => {
    (sandbox.window.RECIPES[catId] || []).forEach((recipe) => flat.push({ catId, recipe }));
  });
  return flat;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildNeedles() {
  const needles = [];
  EQUIPMENT.forEach((entry) => {
    const tagId = "equipment:" + entry.id;
    (entry.syn || []).forEach((syn) => {
      const needle = norm(syn).trim();
      if (!needle) return;
      needles.push({ tagId, entry, needle, regex: new RegExp("\\b" + escapeRegex(needle) + "\\b") });
    });
  });
  return needles;
}

function maskFF(entry, normalizedLine) {
  if (!entry.ff) return normalizedLine;
  let masked = normalizedLine;
  entry.ff.forEach((phrase) => {
    masked = masked.split(norm(phrase)).join(" ");
  });
  return masked;
}

// Maior número no texto de yield ("4-6 porções" -> 6; "2 unidades" -> 2; sem número -> null).
function maxYieldNumber(yieldStr) {
  if (!yieldStr) return null;
  const nums = (String(yieldStr).match(/\d+/g) || []).map(Number);
  return nums.length ? Math.max(...nums) : null;
}

function isSmallYield(yieldStr) {
  if (!yieldStr) return false;
  const max = maxYieldNumber(yieldStr);
  if (max === null || max > AIRFRYER_MAX_YIELD) return false;
  const normalized = norm(String(yieldStr));
  if (AIRFRYER_YIELD_NEGATIVE.some((w) => normalized.indexOf(w) !== -1)) return false;
  return AIRFRYER_YIELD_POSITIVE.some((w) => normalized.indexOf(w) !== -1);
}

const roastVerbRegexes = ROAST_VERBS.map((v) => ({
  verb: v,
  regex: new RegExp("\\b" + escapeRegex(norm(v)) + "\\b"),
}));

const FORNO_NOUNS = ["forno", "refratario", "assadeira"];
const fornoNounRegexes = FORNO_NOUNS.map((w) => new RegExp("\\b" + escapeRegex(norm(w)) + "\\b"));

// Independente de qual needle bateu primeiro (ordem de linha/needle pode mascarar isso) —
// varre TODAS as linhas em busca de qualquer substantivo de forno, pra saber se o forno: dessa
// receita foi disparado só pelo verbo de assar ou se também tem o substantivo em algum lugar.
function recipeHasFornoNoun(rawLines) {
  return (rawLines || []).some((l) => {
    const n = norm(l);
    return fornoNounRegexes.some((re) => re.test(n));
  });
}

function firstRoastVerbLine(rawLines) {
  const lines = (rawLines || []).map((l) => norm(l));
  const idx = lines.findIndex((line) => roastVerbRegexes.some(({ regex }) => regex.test(line)));
  return idx === -1 ? null : rawLines[idx];
}

function deriveFromSteps(recipe, needles) {
  const rawLines = recipe.steps || [];
  const lines = rawLines.map((l) => norm(l));
  const tagIds = new Set();
  const matchedEntryIds = new Set();
  const matchedBy = {}; // tagId -> { needle, line } (pra auditoria)

  lines.forEach((line, idx) => {
    needles.forEach(({ tagId, entry, needle, regex }) => {
      if (matchedEntryIds.has(entry.id)) return;
      const masked = maskFF(entry, line);
      if (regex.test(masked)) {
        matchedEntryIds.add(entry.id);
        tagIds.add(tagId);
        matchedBy[tagId] = { needle, line: rawLines[idx] };
      }
    });
  });

  const fornoViaVerbOnly = tagIds.has("equipment:forno") && !recipeHasFornoNoun(rawLines);
  if (fornoViaVerbOnly) {
    matchedBy["equipment:forno"].line = firstRoastVerbLine(rawLines) || matchedBy["equipment:forno"].line;
  }

  // via condicional: verbo de assar + yield pequeno -> equipment:air-fryer (além da via direta
  // "air fryer"/"airfryer" acima, que já ficou registrada em matchedBy se bateu).
  let airFryerViaRoast = false;
  if (!tagIds.has("equipment:air-fryer") && isSmallYield(recipe.yield)) {
    const hitIdx = lines.findIndex((line) => roastVerbRegexes.some(({ regex }) => regex.test(line)));
    if (hitIdx !== -1) {
      tagIds.add("equipment:air-fryer");
      matchedBy["equipment:air-fryer"] = { needle: "(verbo de assar + yield pequeno)", line: rawLines[hitIdx] };
      airFryerViaRoast = true;
    }
  }

  return { tagIds: Array.from(tagIds), matchedBy, airFryerViaRoast, fornoViaVerbOnly };
}

function runDryRun() {
  const flat = loadRecipes();
  const needles = buildNeedles();

  const results = flat.map(({ catId, recipe }) => {
    const { tagIds, matchedBy, airFryerViaRoast, fornoViaVerbOnly } = deriveFromSteps(recipe, needles);
    return {
      catId,
      name: recipe.name,
      yield: recipe.yield,
      equipment: tagIds,
      matchedBy,
      airFryerViaRoast,
      fornoViaVerbOnly,
    };
  });

  return { results, needles };
}

function printReport(results) {
  console.log("==================================================");
  console.log("FASE 3.1 (v2) — Simulação a seco: equipment: (data/derivation-dict.js)");
  console.log("==================================================");
  console.log("Receitas analisadas:", results.length);
  console.log("");

  console.log("---------- Distribuição por valor ----------");
  const freq = {};
  results.forEach((r) => {
    r.equipment.forEach((t) => {
      freq[t] = (freq[t] || 0) + 1;
    });
  });
  const withAny = results.filter((r) => r.equipment.length > 0).length;
  const withMulti = results.filter((r) => r.equipment.length > 1).length;
  Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .forEach((tagId) => {
      const count = freq[tagId];
      console.log(
        "  " + tagId + " — " + count + " receita(s) (" + ((100 * count) / results.length).toFixed(0) + "%)"
      );
    });
  console.log("");
  console.log("Receitas com pelo menos 1 equipment: ", withAny, "(" + ((100 * withAny) / results.length).toFixed(0) + "%)");
  console.log("Receitas com 2+ equipment: simultâneos:", withMulti);
  console.log("Receitas sem nenhum equipment: ", results.length - withAny);

  console.log("");
  console.log("---------- Amostra de 8 receitas (nome -> equipment: derivado) ----------");
  const step = Math.max(1, Math.floor(results.length / 8));
  for (let i = 0, shown = 0; i < results.length && shown < 8; i += step, shown++) {
    const r = results[i];
    console.log("[" + r.catId + "] " + r.name + " -> " + (r.equipment.length ? r.equipment.join(", ") : "(nenhum)"));
  }

  console.log("");
  console.log("---------- Auditoria: equipment:churrasqueira (sinônimo que disparou) ----------");
  results
    .filter((r) => r.equipment.indexOf("equipment:churrasqueira") !== -1)
    .forEach((r) => {
      console.log("  [" + r.catId + "] " + r.name + " <- \"" + r.matchedBy["equipment:churrasqueira"].needle + "\"");
    });

  console.log("");
  console.log("---------- Amostra: equipment:air-fryer via verbo de assar + yield pequeno ----------");
  const viaRoast = results.filter((r) => r.airFryerViaRoast);
  console.log("Total via essa via condicional:", viaRoast.length);
  viaRoast.forEach((r) => {
    console.log("  [" + r.catId + "] " + r.name + " — yield: \"" + r.yield + "\"");
  });

  console.log("");
  console.log("---------- Amostra de 5: equipment:forno só via verbo (sem forno/refratário/assadeira) ----------");
  const fornoVerbOnly = results.filter((r) => r.fornoViaVerbOnly);
  console.log("Total nessa condição:", fornoVerbOnly.length);
  const fvStep = Math.max(1, Math.floor(fornoVerbOnly.length / 5));
  for (let i = 0, shown = 0; i < fornoVerbOnly.length && shown < 5; i += fvStep, shown++) {
    const r = fornoVerbOnly[i];
    console.log("  [" + r.catId + "] " + r.name);
    console.log("    step: \"" + r.matchedBy["equipment:forno"].line + "\"");
  }

  console.log("");
  console.log("==================================================");
  console.log("Fim do relatório. Nada foi alterado em produção.");
  console.log("==================================================");
}

function validateEquipmentDerivation() {
  const { results } = runDryRun();
  printReport(results);
  return results;
}

if (require.main === module) {
  validateEquipmentDerivation();
}

module.exports = { validateEquipmentDerivation, runDryRun, deriveFromSteps, buildNeedles, maxYieldNumber, isSmallYield };
