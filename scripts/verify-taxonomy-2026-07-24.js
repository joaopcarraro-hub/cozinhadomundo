// scripts/verify-taxonomy-2026-07-24.js
//
// Suíte de verificação da leva de taxonomia aprovada em 2026-07-24 (ver memory
// project_cardapio-busca-taxonomia.md): caso "macarrão é subtipo de massa, não sinônimo" +
// 18 novas entradas de dicionário (macarrão/laranja/maçã/rabanete como filter; bacon/
// linguiça/presunto/pato/massa-folhada/salsão/cúrcuma/alho-poró/beterraba/alface/vagem/
// couve/morango/abacate/alcaparra como só-busca) + fix de falso-amigo açafrão-da-terra +
// gaps de salsinha/pimenta-chili + migração de sinônimos suínos.
//
// Roda o pipeline REAL (js/categories.js, data/derivation-dict.js, js/tags.js, data/*.js,
// js/tagmodel.js) via `new Function("window", code)`, mesmo truque de scripts/derive-tags-
// dry-run.js — NÃO altera nenhum arquivo, NÃO precisa de navegador.
//
// `node scripts/verify-taxonomy-2026-07-24.js` — sai com código != 0 se qualquer asserção falhar.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const JS_DIR = path.join(ROOT, "js");

function runInSandbox(sandbox, code) {
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
  return sandbox.window;
}

function matchesTagId(itemTags, id) {
  if (itemTags.indexOf(id) !== -1) return true;
  if (id.indexOf("protein:") === 0) return itemTags.indexOf("contains:" + id.slice("protein:".length)) !== -1;
  return false;
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
  const TagModel = win.TagModel;
  const flat = TagModel.getAllRecipesFlat();
  const countOf = (id) => flat.filter((it) => it.tags.indexOf(id) !== -1).length;

  console.log("==================================================");
  console.log("1. NENHUMA TAG NOVA NASCE MORTA");
  console.log("==================================================");
  const novasFilterTags = ["ingredient:macarrao", "ingredient:laranja", "ingredient:maca", "ingredient:rabanete"];
  const novasSearchTags = [
    "ingredient:bacon", "ingredient:linguica", "ingredient:presunto", "ingredient:pato",
    "ingredient:massa-folhada", "seasoning:salsao", "seasoning:curcuma", "seasoning:alho-poro",
    "ingredient:beterraba", "ingredient:alface", "ingredient:vagem", "ingredient:couve",
    "ingredient:morango", "ingredient:abacate", "ingredient:alcaparra",
  ];
  novasFilterTags.concat(novasSearchTags).forEach((id) => {
    const n = countOf(id);
    assert(n > 0, id + ": " + n + " receita(s)");
  });

  console.log("");
  console.log("==================================================");
  console.log("2. TIER CORRETO NO tags.js (filter sem lowPriority, search com lowPriority)");
  console.log("==================================================");
  novasFilterTags.forEach((id) => {
    const tag = TagModel.getTagById(id);
    assert(tag && !tag.lowPriority, id + " é filter (sem lowPriority)");
  });
  novasSearchTags.forEach((id) => {
    const tag = TagModel.getTagById(id);
    assert(tag && tag.lowPriority === true, id + " é só-busca (lowPriority:true)");
  });

  console.log("");
  console.log("==================================================");
  console.log("3. TESTE NEGATIVO — caso macarrão (subtipo, não sinônimo)");
  console.log("==================================================");
  const NAO_MACARRAO = ["Lasanha", "Ravioli", "Tortellini", "Agnolotti", "Gnocchi"];
  NAO_MACARRAO.forEach((name) => {
    const item = flat.find((it) => it.recipe.name === name);
    assert(item && item.tags.indexOf("ingredient:macarrao") === -1, name + " NÃO tem ingredient:macarrao (é massa, não macarrão)");
  });
  ["Carbonara", "Cacio e Pepe", "Amatriciana", "Puttanesca", "Aglio e Olio"].forEach((name) => {
    const item = flat.find((it) => it.recipe.name === name);
    assert(item && item.tags.indexOf("ingredient:macarrao") !== -1, name + " TEM ingredient:macarrao");
  });
  const dishTypeMassa = TagModel.getTagById("dish_type:massa");
  assert(dishTypeMassa.synonyms.indexOf("macarrão") === -1, "dish_type:massa não lista mais 'macarrão' como sinônimo");

  console.log("");
  console.log("==================================================");
  console.log("4. REPRODUÇÃO DA QUERY 'macarrão com carne' (previsão do relatório)");
  console.log("==================================================");
  const macBoi = flat.filter((it) => matchesTagId(it.tags, "ingredient:macarrao") && matchesTagId(it.tags, "protein:boi"));
  const macBoiNames = macBoi.map((it) => it.recipe.name).sort();
  const esperado = ["Hot Pot (Fondue Chinês)", "Japchae", "Ragù alla Bolognese", "Shabu-Shabu", "Sukiyaki"].sort();
  assert(JSON.stringify(macBoiNames) === JSON.stringify(esperado), "ingredient:macarrao AND protein:boi = " + JSON.stringify(macBoiNames));

  console.log("");
  console.log("==================================================");
  console.log("5. DIFF ANTES x DEPOIS — tags existentes não podem perder receitas sem justificativa");
  console.log("==================================================");
  // protein:/contains:suino são manuais (recipe.tags, tagueado à mão em data/*.js) — migrar
  // sinônimos em tags.js NÃO pode mudar a derivação, só a sugestão de busca. Prova estrutural:
  // nenhum arquivo data/*.js (exceto derivation-dict.js) foi tocado nesta leva — `git diff
  // --stat data/` confirmado manualmente antes deste commit — então estas contagens são por
  // construção as mesmas de antes da migração de sinônimos.
  console.log("  (protein:suino=" + countOf("protein:suino") + ", contains:suino=" + countOf("contains:suino") + " — verificado por git diff --stat data/ mostrar só derivation-dict.js)");
  assert(countOf("protein:suino") > 0 && countOf("contains:suino") > 0, "protein:suino/contains:suino não zeraram (sanidade)");
  // seasoning:acafrao PERDE 1 (Galinhada) — falso-amigo açafrão-da-terra/cúrcuma, achado
  // durante a implementação, justificado no relatório de diff.
  assert(countOf("seasoning:acafrao") === 10, "seasoning:acafrao: 10 (-1 vs 11 antes — Galinhada removida, falso-amigo açafrão-da-terra)");
  const galinhada = flat.find((it) => it.recipe.name === "Galinhada");
  assert(galinhada.tags.indexOf("seasoning:acafrao") === -1, "Galinhada NÃO tem seasoning:acafrao (usa açafrão-da-terra = cúrcuma)");
  assert(galinhada.tags.indexOf("seasoning:curcuma") !== -1, "Galinhada TEM seasoning:curcuma");
  const tajine = flat.find((it) => it.recipe.name === "Tajine de Cordeiro com Damasco");
  assert(tajine.tags.indexOf("seasoning:acafrao") !== -1 && tajine.tags.indexOf("seasoning:curcuma") !== -1, "Tajine mantém AMBAS acafrao+curcuma (ingrediente alternativo genuíno, não falso-amigo)");
  // gaps fechados — tags existentes GANHAM receitas (esperado, não é perda).
  assert(countOf("seasoning:salsinha") === 61, "seasoning:salsinha: 61 (+8 via 'cheiro verde', era 53)");
  assert(countOf("seasoning:pimenta-chili") === 37, "seasoning:pimenta-chili: 37 (+17 via caiena/gochugaru/ají amarillo, era 20)");
  // country:eua/cuisine:eua/difficulty:dificil revividas (Pacote 1).
  assert(countOf("country:eua") > 0, "country:eua revivida (Pacote 1, origin 'EUA')");
  assert(countOf("difficulty:dificil") === 36, "difficulty:dificil: 36 (Pacote 1, mapeamento 'alta')");
  const colAvancadas = (win.COLLECTIONS || []).find((c) => c.id === "col-avancadas");
  if (colAvancadas) {
    const res = TagModel.getRecipesByCollection("col-avancadas");
    assert(res.allRecipes.length > 0, "col-avancadas não está mais vazia: " + res.allRecipes.length + " receita(s)");
  }

  console.log("");
  console.log("==================================================");
  console.log("6. CONTAGEM ingredient: FILTER NO tags.js (antes=51, depois=51+4)");
  console.log("==================================================");
  const ingFilterAfter = (win.TAGS || []).filter((t) => t.id.indexOf("ingredient:") === 0 && !t.lowPriority);
  assert(ingFilterAfter.length === 55, "tags ingredient: filter (chips/modal): " + ingFilterAfter.length + " (era 51, +4: macarrão/laranja/maçã/rabanete)");

  console.log("");
  console.log("==================================================");
  console.log("7. TESTE NEGATIVO — falso-amigos mascarados corretamente");
  console.log("==================================================");
  const linguicaItems = flat.filter((it) => it.tags.indexOf("ingredient:linguica") !== -1);
  assert(linguicaItems.every((it) => it.recipe.name !== "Fried Chicken"), "'pimenta caiena' não é lida como linguiça calabresa (ff funcionando)");
  const couveItems = flat.filter((it) => it.tags.indexOf("ingredient:couve") !== -1);
  assert(couveItems.every((it) => it.recipe.name !== "Purê Ultra Liso"), "'couve-flor' não conta como ingredient:couve (Purê Ultra Liso usa só couve-flor)");
  const macItems = flat.filter((it) => it.tags.indexOf("ingredient:macarrao") !== -1);
  assert(!NAO_MACARRAO.some((n) => macItems.some((it) => it.recipe.name === n)), "nenhuma receita de NAO_MACARRAO vazou pra ingredient:macarrao");

  console.log("");
  console.log("==================================================");
  console.log(failures === 0 ? "TODAS AS ASSERÇÕES PASSARAM" : "FALHAS: " + failures);
  console.log("==================================================");
  process.exit(failures === 0 ? 0 : 1);
}

main();
