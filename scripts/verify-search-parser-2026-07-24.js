// scripts/verify-search-parser-2026-07-24.js
//
// Suíte de verificação do parser de busca (js/search.js) implementado em 2026-07-24, sobre a
// taxonomia commitada em c9e3610/83922b6. Roda o CÓDIGO REAL (categories.js, derivation-dict.js,
// tags.js, data/*.js, tagmodel.js, search.js) via `new Function("window", code)`, mesmo truque
// de scripts/derive-tags-dry-run.js — não simula nada, chama Search.parseQuery/searchByQuery/
// classifyCandidate/matchesTextFilter de verdade. NÃO precisa de navegador (router.js/app.js
// dependem de `document`, ficam fora deste harness).
//
// `node scripts/verify-search-parser-2026-07-24.js` — sai com código != 0 se algo falhar.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const JS_DIR = path.join(ROOT, "js");

function runInSandbox(sandbox, code, label) {
  // eslint-disable-next-line no-new-func
  new Function("window", code)(sandbox.window);
}

function loadPipeline() {
  const sandbox = { window: {} };
  runInSandbox(sandbox, fs.readFileSync(path.join(JS_DIR, "categories.js"), "utf8"));
  runInSandbox(sandbox, fs.readFileSync(path.join(DATA_DIR, "derivation-dict.js"), "utf8"));
  runInSandbox(sandbox, fs.readFileSync(path.join(JS_DIR, "tags.js"), "utf8"));
  fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".js") && f !== "derivation-dict.js" && f !== "shopping-dict.js")
    .forEach((f) => runInSandbox(sandbox, fs.readFileSync(path.join(DATA_DIR, f), "utf8")));
  runInSandbox(sandbox, fs.readFileSync(path.join(JS_DIR, "tagmodel.js"), "utf8"));
  runInSandbox(sandbox, fs.readFileSync(path.join(JS_DIR, "search.js"), "utf8"));
  return sandbox.window;
}

let failures = 0;
function assert(cond, label) {
  if (cond) {
    console.log("  OK   " + label);
  } else {
    console.log("  FAIL " + label);
    failures++;
  }
}

function main() {
  const win = loadPipeline();
  const Search = win.Search;
  const TagModel = win.TagModel;
  const namesOf = (rows) => rows.map((r) => r.item.recipe.name);

  console.log("==================================================");
  console.log("1. GUARD DE VOCABULÁRIO — trava a classificação, falha em deriva silenciosa");
  console.log("==================================================");
  // Congelado da investigação de 2026-07-24 (Passo 1, aprovado). Se este teste falhar porque um
  // termo novo entrou ou saiu, é sinal de que a taxonomia mudou o comportamento da busca —
  // revisar deliberadamente antes de atualizar esta lista, nunca só "consertar o teste".
  const EXPECTED_AMBIGUOUS = [
    "acafrao", "alho", "avancada", "cafe", "caldo", "camarao", "doce", "entrada", "frances",
    "leite", "lula", "massa", "mexilhao", "molho", "pato", "peixe", "peru", "polvo", "rapida",
    "rapido", "tecnica",
  ].sort();
  const allTerms = Search.getVocabularySingleWordTerms();
  const ambiguousNow = allTerms.filter((t) => Search.classifyCandidate(t, []).classification === "optional").sort();
  const missing = EXPECTED_AMBIGUOUS.filter((t) => ambiguousNow.indexOf(t) === -1);
  const extra = ambiguousNow.filter((t) => EXPECTED_AMBIGUOUS.indexOf(t) === -1);
  assert(missing.length === 0, "nenhum termo esperado SUMIU da lista de ambíguos" + (missing.length ? " — FALTAM: " + missing.join(",") : ""));
  assert(extra.length === 0, "nenhum termo NOVO virou ambíguo sem atualização esperada" + (extra.length ? " — NOVOS: " + extra.join(",") : ""));
  assert(ambiguousNow.length === 21, "total de termos ambíguos = 21 (atual: " + ambiguousNow.length + ")");

  console.log("");
  console.log("==================================================");
  console.log("2. PREDICADO — macarrão AUTO; carne/peixe/massa/peru/café/leite/alho OPCIONAL");
  console.log("==================================================");
  const c1 = Search.classifyCandidate("macarrao", []);
  assert(c1.classification === "auto" && c1.autoTagId === "ingredient:macarrao", "macarrao -> auto ingredient:macarrao (" + c1.classification + "/" + c1.autoTagId + ")");
  // "carne" nunca é IGUAL à frase de tag nenhuma (só "carne bovina"/"carne de porco", mais
  // longas) — a classificação forte (classifyCandidate) corretamente devolve "text" pra ela;
  // é o parseQuery, no fallback de token único, que a promove a "optional" via continência.
  // Testar pelo pipeline real (parseQuery), não pela função interna isolada.
  ["peixe", "massa", "peru", "cafe", "leite", "alho"].forEach((t) => {
    const c = Search.classifyCandidate(t, []);
    assert(c.classification === "optional", t + " -> optional (obtido: " + c.classification + ")");
  });
  const pCarne = Search.parseQuery("carne", []);
  const segCarne = pCarne.segments[0];
  assert(segCarne && segCarne.classification === "optional", "carne (via parseQuery) -> optional (obtido: " + (segCarne && segCarne.classification) + ")");
  assert(segCarne && JSON.stringify(segCarne.chipTagIds.slice().sort()) === JSON.stringify(["protein:boi", "protein:suino"]), "carne -> chips [protein:boi, protein:suino] (obtido: " + JSON.stringify(segCarne && segCarne.chipTagIds) + ")");

  console.log("");
  console.log("==================================================");
  console.log("3. TESTE NEGATIVO — Lasanha/Ravioli/Tortellini/Agnolotti/Gnocchi NUNCA em ingredient:macarrao");
  console.log("==================================================");
  const flat = TagModel.getAllRecipesFlat();
  ["Lasanha", "Ravioli", "Tortellini", "Agnolotti", "Gnocchi"].forEach((name) => {
    const item = flat.find((it) => it.recipe.name === name);
    assert(item && item.tags.indexOf("ingredient:macarrao") === -1, name + " NÃO tem ingredient:macarrao");
  });

  console.log("");
  console.log("==================================================");
  console.log("4. AS 4 QUERIES REAIS + PROVA MACARRÃO");
  console.log("==================================================");

  // ---- macarrão com carne ----
  const r1 = Search.searchByQuery("macarrão com carne", { excludeTagIds: [] });
  console.log("  'macarrão com carne' autoTags=" + JSON.stringify(r1.parsed.autoTagIds) + " residual=" + JSON.stringify(r1.parsed.residualTokens));
  console.log("  bloco1 (" + r1.block1.length + "): " + namesOf(r1.block1).join(", "));
  console.log("  bloco2 (" + r1.block2.length + "): " + namesOf(r1.block2).join(", "));
  const b1Names1 = namesOf(r1.block1);
  ["Ragù alla Bolognese", "Hot Pot (Fondue Chinês)", "Japchae", "Sukiyaki", "Shabu-Shabu"].forEach((n) => {
    assert(b1Names1.indexOf(n) !== -1, "macarrão com carne: bloco1 contém " + n);
  });
  assert(b1Names1.indexOf("Lasanha") === -1 && namesOf(r1.block2).indexOf("Lasanha") === -1, "macarrão com carne: Lasanha AUSENTE de bloco1 E bloco2");
  assert(r1.parsed.autoTagIds.indexOf("ingredient:macarrao") !== -1, "macarrão com carne: ingredient:macarrao é auto");
  assert(r1.parsed.autoTagIds.indexOf("protein:boi") === -1, "macarrão com carne: protein:boi NÃO auto (carne é ambíguo, não colapsa sozinho)");

  // ---- carne na air fryer ----
  const r2 = Search.searchByQuery("carne na air fryer", { excludeTagIds: [] });
  console.log("\n  'carne na air fryer' autoTags=" + JSON.stringify(r2.parsed.autoTagIds) + " residual=" + JSON.stringify(r2.parsed.residualTokens));
  console.log("  bloco1 (" + r2.block1.length + "): " + namesOf(r2.block1).join(", "));
  assert(r2.parsed.autoTagIds.indexOf("equipment:air-fryer") !== -1, "carne na air fryer: equipment:air-fryer é auto");
  assert(namesOf(r2.block1).indexOf("Chips de Vegetais") === -1, "carne na air fryer: Chips de Vegetais FORA do bloco1 (só batia em descrição — escopo B1 mais estrito)");
  assert(namesOf(r2.block1).indexOf("Agnolotti") === -1, "carne na air fryer: Agnolotti FORA do bloco1 (só batia em descrição)");

  // ---- receitas de air fryer ----
  const r3 = Search.searchByQuery("receitas de air fryer", { excludeTagIds: [] });
  console.log("\n  'receitas de air fryer' bloco1 (" + r3.block1.length + ")");
  assert(r3.block1.length === 20, "receitas de air fryer: bloco1 = 20 (obtido: " + r3.block1.length + ")");

  // ---- lasanha de forno ----
  const r4 = Search.searchByQuery("lasanha de forno", { excludeTagIds: [] });
  console.log("\n  'lasanha de forno' bloco1 (" + r4.block1.length + "): " + namesOf(r4.block1).join(", "));
  assert(r4.block1.length > 0 && r4.block1[0].item.recipe.name === "Lasanha", "lasanha de forno: Lasanha é o 1º do bloco1");

  console.log("");
  console.log("==================================================");
  console.log("5. TEXTO PURO SEM TAG — nunca cai em tela vazia");
  console.log("==================================================");
  const r5 = Search.searchByQuery("cremoso", { excludeTagIds: [] });
  console.log("  'cremoso' bloco1=" + r5.block1.length + " bloco2=" + r5.block2.length);
  assert(r5.parsed.autoTagIds.length === 0, "cremoso: nenhuma tag auto");
  assert(r5.block1.length === 0, "cremoso: bloco1 vazio (sem tag pra filtrar)");
  assert(r5.block2.length > 0, "cremoso: bloco2 NÃO vazio (" + r5.block2.length + " receitas) — nunca tela vazia");

  console.log("");
  console.log("==================================================");
  console.log("6. FALLBACK PARCIAL — zero nos 2 blocos, 2+ termos");
  console.log("==================================================");
  const r6 = Search.searchByQuery("xyzinexistente carne", { excludeTagIds: [] });
  console.log("  'xyzinexistente carne' bloco1=" + r6.block1.length + " bloco2=" + r6.block2.length + " parcial=" + r6.partial.length);
  assert(r6.block1.length === 0 && r6.block2.length === 0, "termo inventado + carne: ambos os blocos zeram");
  assert(r6.partial.length > 0, "termo inventado + carne: fallback parcial não vazio (" + r6.partial.length + ")");

  console.log("");
  console.log("==================================================");
  console.log("7. ZERO ABSOLUTO — termo que não bate em nada");
  console.log("==================================================");
  const r7 = Search.searchByQuery("xyzxyzxyznadaaqui", { excludeTagIds: [] });
  assert(r7.block1.length === 0 && r7.block2.length === 0 && r7.partial.length === 0, "termo totalmente inexistente: os 3 zeram (mensagem honesta, sem resultado falso)");

  console.log("");
  console.log("==================================================");
  console.log("8. searchTags INALTERADO (outro consumidor: renderGrupo em app.js)");
  console.log("==================================================");
  const st = Search.searchTags("italia");
  assert(st.length > 0 && st[0].id === "country:italia", "searchTags('italia') ainda funciona (substring/label, comportamento antigo preservado)");

  console.log("");
  console.log("==================================================");
  console.log("9. matchesTextFilter — usado por facetUniverse pro estado já materializado");
  console.log("==================================================");
  const lasanhaItem = flat.find((it) => it.recipe.name === "Lasanha");
  assert(Search.matchesTextFilter(lasanhaItem, "lasanha") === true, "matchesTextFilter(Lasanha, 'lasanha') = true (nome)");
  assert(Search.matchesTextFilter(lasanhaItem, "xyznada") === false, "matchesTextFilter(Lasanha, 'xyznada') = false (teste negativo)");

  console.log("");
  console.log("==================================================");
  console.log("10. MÁSCARA DE MEDIDAS — 'colher (sopa)' não contamina 'sopa'");
  console.log("==================================================");
  // Mede o campo `ingrediente` DIRETAMENTE (antes/depois da máscara) — testar via
  // searchByQuery("sopa") seria enganoso: "sopa" é o próprio synonym de dish_type:sopa, então
  // vira AUTO-tag e desvia quase tudo pro bloco1 sem sobrar resíduo textual pra mascarar,
  // medindo outra coisa (achado ao reconciliar com o número da proposta original, 201->1).
  const masks = (win.DerivationDict && win.DerivationDict.MEASUREMENT_MASKS) || [];
  function maskMeasures(s) {
    let t = s;
    masks.forEach((m) => {
      t = t.split(m).join(" ");
    });
    return t;
  }
  function norm(s) {
    return win.DerivationDict.norm((s || "").toString());
  }
  const semMascara = flat.filter((it) => /\bsopa\b/.test(norm((it.recipe.ingredients || []).join(" ")))).length;
  const comMascara = flat.filter((it) => /\bsopa\b/.test(maskMeasures(norm((it.recipe.ingredients || []).join(" "))))).length;
  console.log("  campo ingrediente, 'sopa': sem máscara=" + semMascara + " | com máscara=" + comMascara);
  assert(semMascara >= 180, "sem máscara: 'colher de sopa' contamina ~200 receitas (obtido " + semMascara + ")");
  assert(comMascara <= 5, "com máscara: cai pra quase zero (obtido " + comMascara + ")");

  console.log("");
  console.log("==================================================");
  console.log(failures === 0 ? "TODAS AS ASSERÇÕES PASSARAM" : "FALHAS: " + failures);
  console.log("==================================================");
  process.exit(failures === 0 ? 0 : 1);
}

main();
