// scripts/derive-tags-dry-run.js
//
// Simulação a seco do motor de derivação de tags orientado por dicionário canônico
// (data/derivation-dict.js). NÃO altera nenhum arquivo, NÃO roda no navegador — é uma
// ferramenta de auditoria pra rodar via `node scripts/derive-tags-dry-run.js` sempre que o
// dicionário mudar (ver validateDerivation() no fim do arquivo).
//
// O que deriva nesta fase:
//   - de `ingredients`: ingredient:*/seasoning:* (via DICT, casamento por palavra inteira,
//     hífen como separador, blocklist de falso-amigo por entrada) + water:* (do atributo da
//     espécie, ex. camarão -> water:frutos-do-mar).
//   - de `origin`: cuisine:* (do país) e region:* (do texto entre parênteses).
// O que NÃO entra nesta fase: equipment: (Fase 3) e technique: (fora de escopo desta leva).
//
// "Antes" = recipe.tags puro (só o que foi tagueado à mão), sem nenhuma derivação — nem a
// de tempo/dificuldade/país/categoria (já em produção) nem a de ingredient: que já existe em
// js/tagmodel.js (deriveIngredientTags, Prompt 1). É o baseline "quanto sinal curado existe
// hoje", que é o que já bate com os números citados (2,29 tags/receita, 27% com <=1).

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

const { DICT, BLOCK, norm } = require(path.join(DATA_DIR, "derivation-dict.js"));

// ---------- carrega as 398 receitas (mesmo shim de window usado nas outras auditorias do projeto) ----------
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

// ---------- pré-compila os needles do DICT (uma vez, reaproveitado pra todas as receitas) ----------
function buildNeedles() {
  const needles = [];
  DICT.forEach((entry) => {
    if (entry.tier === "block") return; // reservado, nenhuma entrada usa hoje
    if (BLOCK.indexOf(entry.id) !== -1) return; // defensivo: nunca deixa um id da blocklist virar tag
    const prefix = entry.ns === "ingredient" ? "ingredient:" : "seasoning:";
    const tagId = prefix + entry.id;
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

function deriveFromIngredients(recipe, needles) {
  const lines = (recipe.ingredients || []).map((l) => norm(l));
  const tagIds = new Set();
  const matchedEntryIds = new Set();
  lines.forEach((line) => {
    needles.forEach(({ tagId, entry, regex }) => {
      if (matchedEntryIds.has(entry.id)) return; // já bateu essa entrada em outra linha
      const masked = maskFF(entry, line);
      if (regex.test(masked)) {
        matchedEntryIds.add(entry.id);
        tagIds.add(tagId);
        if (entry.water) tagIds.add("water:" + entry.water);
      }
    });
  });
  return Array.from(tagIds);
}

function slugify(s) {
  return norm(s).trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Mesma lista de js/tagmodel.js (ORIGIN_COUNTRY_MATCHERS) — mantenha em sincronia se um dos
// dois mudar. cuisine:/region: só derivam quando o país bate aqui; fora disso não deriva nada
// (correto pra Fundamentos/Técnicas Contemporâneas, cujo `origin` não é geográfico).
const ORIGIN_COUNTRY_MATCHERS = [
  ["Brasil", "brasil"],
  ["França", "franca"],
  ["Itália", "italia"],
  ["Espanha", "espanha"],
  ["Portugal", "portugal"],
  ["Japão", "japao"],
  ["China", "china"],
  ["Coreia", "coreia"],
  ["Tailândia", "tailandia"],
  ["Índia", "india"],
  ["México", "mexico"],
  ["Peru", "peru"],
  ["Alemanha", "alemanha"],
  ["Áustria", "austria"],
  ["Hungria", "hungria"],
  ["Grécia", "grecia"],
  ["Marrocos", "marrocos"],
  ["Líbano", "libano"],
  ["Estados Unidos", "eua"],
  ["Dinamarca", "dinamarca"],
];

// Parênteses que não são região geográfica mesmo dentro de um país válido (ex: "Brasil
// (adaptação)") — mascarado com a mesma mecânica do `ff` antes de virar region:.
const REGION_BLOCKLIST = ["adaptacao", "adaptado", "estilo", "moderna", "tradicional", "versao", "receita"];

function maskRegionBlocklist(normalizedText) {
  let masked = normalizedText;
  REGION_BLOCKLIST.forEach((word) => {
    masked = masked.replace(new RegExp("\\b" + norm(word) + "\\b", "g"), " ");
  });
  return masked;
}

function deriveFromOrigin(origin) {
  if (!origin) return [];
  const m = origin.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  const parenPart = m ? m[2] : null; // grupo entre parênteses, se houver

  const tags = [];
  const matchedSlugs = [];
  ORIGIN_COUNTRY_MATCHERS.forEach(([name, slug]) => {
    if (origin.indexOf(name) !== -1 && matchedSlugs.indexOf(slug) === -1) {
      matchedSlugs.push(slug);
      tags.push("cuisine:" + slug);
    }
  });

  // region: só quando pelo menos um país reconhecido bateu — senão o parêntese não é uma
  // "região de um país", é outra coisa (nota de estilo/técnica, ex: Contemporâneos).
  if (parenPart && matchedSlugs.length) {
    const masked = maskRegionBlocklist(norm(parenPart));
    const slug = slugify(masked);
    if (slug) tags.push("region:" + slug);
  }

  return tags;
}

function avg(arr) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function runDryRun() {
  const flat = loadRecipes();
  const needles = buildNeedles();

  const results = flat.map(({ catId, recipe }) => {
    const before = (recipe.tags || []).slice();
    const derivedIngredient = deriveFromIngredients(recipe, needles);
    const derivedOrigin = deriveFromOrigin(recipe.origin);
    const derivedOnly = Array.from(new Set(derivedIngredient.concat(derivedOrigin)));
    const after = Array.from(new Set(before.concat(derivedOnly)));
    return { catId, name: recipe.name, before, derivedOnly, after };
  });

  return { results, needles };
}

function printReport(results) {
  const beforeLens = results.map((r) => r.before.length);
  const afterLens = results.map((r) => r.after.length);
  const le1Before = beforeLens.filter((n) => n <= 1).length;
  const le1After = afterLens.filter((n) => n <= 1).length;

  console.log("==================================================");
  console.log("FASE 1 — Simulação a seco (data/derivation-dict.js)");
  console.log("==================================================");
  console.log("Receitas analisadas:", results.length);
  console.log("");
  console.log("Média de tags ANTES (só recipe.tags manual, sem nenhuma derivação):", avg(beforeLens).toFixed(2));
  console.log("Média de tags DEPOIS (manual + dict-engine ingredient:/seasoning:/water:/cuisine:/region:):", avg(afterLens).toFixed(2));
  console.log(
    "Receitas com <=1 tag ANTES:",
    le1Before,
    "(" + ((100 * le1Before) / results.length).toFixed(0) + "%)"
  );
  console.log(
    "Receitas com <=1 tag DEPOIS:",
    le1After,
    "(" + ((100 * le1After) / results.length).toFixed(0) + "%)"
  );

  console.log("");
  console.log("---------- Amostra de 10 receitas (antes -> depois) ----------");
  const step = Math.max(1, Math.floor(results.length / 10));
  for (let i = 0, shown = 0; i < results.length && shown < 10; i += step, shown++) {
    const r = results[i];
    console.log("");
    console.log("[" + r.catId + "] " + r.name);
    console.log("  antes:  " + (r.before.length ? r.before.join(", ") : "(nenhuma)"));
    console.log("  depois: " + r.after.join(", "));
  }

  console.log("");
  console.log("---------- Auditoria de falso-positivo (tags de risco) ----------");
  const RISKY_NAMES = ["mel", "coco", "dourado", "cafe"];
  const freq = {};
  results.forEach((r) => {
    r.derivedOnly.forEach((t) => {
      if (t.indexOf("ingredient:") === 0 || t.indexOf("seasoning:") === 0) {
        freq[t] = (freq[t] || 0) + 1;
      }
    });
  });
  const threshold = results.length * 0.4;
  const riskyTagIds = new Set();
  RISKY_NAMES.forEach((n) => {
    if (freq["ingredient:" + n] !== undefined) riskyTagIds.add("ingredient:" + n);
    if (freq["seasoning:" + n] !== undefined) riskyTagIds.add("seasoning:" + n);
  });
  Object.keys(freq).forEach((t) => {
    if (freq[t] > threshold) riskyTagIds.add(t);
  });

  Array.from(riskyTagIds)
    .sort()
    .forEach((tagId) => {
      const matches = results.filter((r) => r.derivedOnly.indexOf(tagId) !== -1);
      console.log("");
      console.log(
        tagId + " — " + matches.length + " receita(s)" + (freq[tagId] > threshold ? "  [>40% das receitas]" : "")
      );
      matches.forEach((m) => console.log("  - [" + m.catId + "] " + m.name));
    });

  console.log("");
  console.log("==================================================");
  console.log("Fim do relatório. Nada foi alterado em produção.");
  console.log("==================================================");
}

function validateDerivation() {
  const { results } = runDryRun();
  printReport(results);
  return results;
}

if (require.main === module) {
  validateDerivation();
}

module.exports = { validateDerivation, runDryRun, deriveFromIngredients, deriveFromOrigin, buildNeedles };
