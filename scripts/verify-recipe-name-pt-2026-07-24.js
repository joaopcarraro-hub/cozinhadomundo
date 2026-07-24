// scripts/verify-recipe-name-pt-2026-07-24.js
//
// Suíte de verificação dos 25 renomes de recipe.name pra português (2026-07-24, ver skill
// recipe-data-quality). Roda o CÓDIGO REAL (categories.js, derivation-dict.js, tags.js,
// data/*.js, tagmodel.js, storage.js, router.js) via `new Function`, com localStorage mockado
// em memória — não precisa de navegador. `git show HEAD:` carrega o estado ANTES do rename
// (commit anterior) pra comparar tags sem depender de git stash (não altera a working tree).
//
// `node scripts/verify-recipe-name-pt-2026-07-24.js` — sai com código != 0 se algo falhar.

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const JS_DIR = path.join(ROOT, "js");

function runInSandbox(sandbox, code) {
  // eslint-disable-next-line no-new-func
  new Function("window", code)(sandbox.window);
}

// ---------- pipeline ATUAL (working tree, pós-rename) ----------
function loadCurrentPipeline() {
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

// ---------- pipeline de ANTES do rename (git show HEAD:), só tags+ids, sem tocar a working tree ----------
function loadPreviousPipeline() {
  const sandbox = { window: {} };
  function loadFromHead(relPath) {
    const code = execSync("git show HEAD:" + relPath.split(path.sep).join("/"), { cwd: ROOT, encoding: "utf8" });
    runInSandbox(sandbox, code);
  }
  loadFromHead("js/categories.js");
  loadFromHead("data/derivation-dict.js");
  loadFromHead("js/tags.js");
  const dataFilesAtHead = execSync("git ls-tree -r --name-only HEAD -- data/", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter((f) => f.endsWith(".js") && !f.endsWith("derivation-dict.js") && !f.endsWith("shopping-dict.js"));
  dataFilesAtHead.forEach(loadFromHead);
  loadFromHead("js/tagmodel.js");
  return sandbox.window;
}

// ---------- mock de localStorage em memória, pra rodar storage.js real fora do navegador ----------
function makeLocalStorageMock() {
  const store = {};
  return {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
    setItem: (k, v) => {
      store[k] = String(v);
    },
    removeItem: (k) => {
      delete store[k];
    },
    _dump: () => JSON.parse(JSON.stringify(store)),
  };
}

// Carrega storage.js real contra um TagModel real (pro getIdForCatAndName do migrateOldId
// funcionar) e um localStorage mockado — devolve window.Storage pronto pra uso.
function loadStorageAgainst(pipelineWindow, mockLocalStorage) {
  const sandbox = { window: Object.assign({}, pipelineWindow) };
  global.localStorage = mockLocalStorage; // bare global — storage.js usa localStorage sem "window." (convenção do arquivo)
  runInSandbox(sandbox, fs.readFileSync(path.join(JS_DIR, "storage.js"), "utf8"));
  return sandbox.window.Storage;
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

const RENAMES = [
  ["austria", "Apfelstrudel", "Strudel de Maçã"],
  ["cordeiro", "Shank de Cordeiro", "Jarrete de Cordeiro"],
  ["entradas-quentes", "Croquetas", "Croquetes"],
  ["eua", "Apple Pie", "Torta de Maçã"],
  ["eua", "Buffalo Wings", "Asinhas de Frango Buffalo"],
  ["eua", "Clam Chowder", "Chowder de Amêijoas"],
  ["eua", "Fried Chicken", "Frango Frito Americano"],
  ["franca", "Salade Niçoise", "Salada Niçoise"],
  ["padaria", "Pain de Campagne", "Pão Rústico"],
  ["risotos", "Risotto ai Frutti di Mare", "Risoto ai Frutti di Mare"],
  ["risotos", "Risotto ai Funghi", "Risoto ai Funghi"],
  ["risotos", "Risotto al Limone", "Risoto al Limone"],
  ["risotos", "Risotto al Parmigiano", "Risoto al Parmigiano"],
  ["risotos", "Risotto alla Barbabietola (Beterraba)", "Risoto alla Barbabietola (Beterraba)"],
  ["risotos", "Risotto alla Milanese", "Risoto alla Milanese"],
  ["risotos", "Risotto alla Zucca (Abóbora)", "Risoto alla Zucca (Abóbora)"],
  ["sobremesas-classicas", "Lemon Tart", "Torta de Limão"],
  ["sobremesas-classicas", "Mille-feuille", "Mil-Folhas"],
  ["sopas", "French Onion Soup", "Sopa de Cebola Francesa"],
  ["tailandia", "Green Curry (Gaeng Keow Wan)", "Curry Verde (Gaeng Keow Wan)"],
  ["tailandia", "Red Curry (Gaeng Phed)", "Curry Vermelho (Gaeng Phed)"],
  ["tecnicas-contemporaneas-2", "Dry Aging (Maturação Seca)", "Maturação Seca (Dry Aging)"],
  ["dinamarca", "Wienerbrød (Danish Pastry)", "Wienerbrød (Massa Folhada Dinamarquesa)"],
  ["aves", "Chicken Cordon Bleu", "Frango Cordon Bleu"],
  ["hungria", "Chicken Paprikash", "Frango Paprikash"],
];

function main() {
  const before = loadPreviousPipeline();
  const after = loadCurrentPipeline();
  const beforeFlat = before.TagModel.getAllRecipesFlat();
  const afterFlat = after.TagModel.getAllRecipesFlat();

  console.log("==================================================");
  console.log("1. OS 25 NOMES NOVOS EXISTEM; OS 25 ANTIGOS SUMIRAM");
  console.log("==================================================");
  RENAMES.forEach(([catId, oldName, newName]) => {
    const now = afterFlat.find((it) => it.catId === catId && it.recipe.name === newName);
    const oldStill = afterFlat.find((it) => it.catId === catId && it.recipe.name === oldName);
    assert(!!now, catId + "/" + newName + " existe no estado atual");
    assert(!oldStill, catId + "/" + oldName + " NÃO existe mais (teste negativo)");
  });

  console.log("");
  console.log("==================================================");
  console.log("2. ZERO COLISÃO DE SLUG — 398 receitas atuais + entre os 25 renomes");
  console.log("==================================================");
  const idCounts = {};
  afterFlat.forEach((it) => {
    idCounts[it.id] = (idCounts[it.id] || 0) + 1;
  });
  const dupIds = Object.keys(idCounts).filter((id) => idCounts[id] > 1);
  assert(afterFlat.length === 398, "total de receitas = 398 (obtido " + afterFlat.length + ")");
  assert(dupIds.length === 0, "nenhum id duplicado entre as 398 receitas (obtido " + dupIds.length + " duplicado(s))");
  const newIds = new Set(afterFlat.map((it) => it.id));
  const renameNewIds = RENAMES.map(([catId, , newName]) => afterFlat.find((it) => it.catId === catId && it.recipe.name === newName).id);
  assert(new Set(renameNewIds).size === 25, "os 25 novos slugs são todos distintos entre si");

  console.log("");
  console.log("==================================================");
  console.log("3. TAGS IDÊNTICAS ANTES x DEPOIS (renomear não deriva tag nenhuma)");
  console.log("==================================================");
  RENAMES.forEach(([catId, oldName, newName]) => {
    const beforeItem = beforeFlat.find((it) => it.catId === catId && it.recipe.name === oldName);
    const afterItem = afterFlat.find((it) => it.catId === catId && it.recipe.name === newName);
    if (!beforeItem || !afterItem) {
      assert(false, catId + "/" + oldName + " -> " + newName + ": não encontrado em uma das duas árvores");
      return;
    }
    const beforeTags = beforeItem.tags.slice().sort();
    const afterTags = afterItem.tags.slice().sort();
    assert(
      JSON.stringify(beforeTags) === JSON.stringify(afterTags),
      catId + "/" + newName + ": tags idênticas (" + afterTags.length + " tags)"
    );
  });
  assert(beforeFlat.length === afterFlat.length, "contagem total de receitas inalterada (" + beforeFlat.length + " = " + afterFlat.length + ")");

  console.log("");
  console.log("==================================================");
  console.log("4. ALIAS DO ROUTER — os 25 slugs antigos resolvem pro novo");
  console.log("==================================================");
  // window.Storage precisa existir ANTES do router.js rodar (mesma ordem do index.html).
  const routerSandboxWindow = Object.assign({}, after);
  const mockLS = makeLocalStorageMock();
  routerSandboxWindow.Storage = loadStorageAgainst(after, mockLS);
  routerSandboxWindow.addEventListener = () => {}; // router.js só usa isso pra hashchange, irrelevante aqui (testamos parseHash via Router.current())
  global.location = { hash: "" };
  const routerSandbox = { window: routerSandboxWindow };
  runInSandbox(routerSandbox, fs.readFileSync(path.join(JS_DIR, "router.js"), "utf8"));
  const Router = routerSandbox.window.Router;

  // pega o mapa direto do Storage carregado (fonte única, mesma tabela que o Router consome)
  const map = routerSandboxWindow.Storage.RENAME_SLUG_MAP;
  assert(Object.keys(map).length === 25, "RENAME_SLUG_MAP tem 25 pares (obtido " + Object.keys(map).length + ")");
  Object.keys(map).forEach((oldSlug) => {
    const newSlug = map[oldSlug];
    global.location.hash = "#/receita/" + oldSlug;
    const route = Router.current();
    assert(route.name === "receita" && route.id === newSlug, "#/receita/" + oldSlug + " resolve pra " + newSlug + " (obtido: " + route.id + ")");
  });
  // teste negativo: um slug que NUNCA existiu não deve ser "resolvido" pra nada
  global.location.hash = "#/receita/isso-nao-existe-nunca";
  const noop = Router.current();
  assert(noop.id === "isso-nao-existe-nunca", "slug desconhecido passa direto, sem alias falso-positivo (teste negativo)");
  // cozinhar/:id também
  const [oneOld, oneNew] = Object.entries(map)[0];
  global.location.hash = "#/cozinhar/" + oneOld;
  const cook = Router.current();
  assert(cook.name === "cozinhar" && cook.id === oneNew, "#/cozinhar/" + oneOld + " também resolve pra " + oneNew);

  console.log("");
  console.log("==================================================");
  console.log("5. TESTE NEGATIVO DE MIGRAÇÃO — favoritas/feitas sobrevivem ao rename");
  console.log("==================================================");
  {
    const mock = makeLocalStorageMock();
    const [sampleOld, sampleNew] = Object.entries(map)[3]; // um qualquer, não o primeiro (evita viés)
    // estado ANTIGO gravado direto no mock, como se o usuário tivesse favoritado/feito ANTES do rename
    mock.setItem("cardapio-state-v2", JSON.stringify({ made: [sampleOld, "outra-receita-qualquer"], favorites: [sampleOld] }));
    const Storage1 = loadStorageAgainst(after, mock);
    assert(Storage1.isFavorite(sampleNew) === true, "favorita pelo slug ANTIGO (" + sampleOld + ") sobrevive no slug NOVO (" + sampleNew + ")");
    assert(Storage1.isMade(sampleNew) === true, "feita pelo slug ANTIGO sobrevive no slug NOVO");
    assert(Storage1.isFavorite(sampleOld) === false, "slug antigo NÃO fica favoritado também (sem duplicata) — teste negativo");
    assert(Storage1.isMade("outra-receita-qualquer") === true, "receita não-renomeada no mesmo estado não é afetada — teste negativo");
  }

  console.log("");
  console.log("==================================================");
  console.log("6. TESTE NEGATIVO DE MIGRAÇÃO — últimas visitadas (gusta-recentes-v1) sobrevivem");
  console.log("==================================================");
  {
    const mock = makeLocalStorageMock();
    const [sampleOld, sampleNew] = Object.entries(map)[7];
    const otherRecipe = afterFlat.find((it) => !map[it.id]).id; // receita qualquer, não-renomeada
    mock.setItem(
      "gusta-recentes-v1",
      JSON.stringify({
        version: 1,
        items: [
          { recipeId: sampleOld, viewedAt: 1000 },
          { recipeId: otherRecipe, viewedAt: 900 },
        ],
      })
    );
    const Storage2 = loadStorageAgainst(after, mock);
    const recent = Storage2.getRecentlyViewed();
    const migrated = recent.find((it) => it.recipeId === sampleNew);
    assert(!!migrated && migrated.viewedAt === 1000, "recipeId antigo (" + sampleOld + ") migrou pro novo (" + sampleNew + "), viewedAt preservado");
    assert(!recent.some((it) => it.recipeId === sampleOld), "slug antigo não sobra na lista — teste negativo");
    assert(recent.some((it) => it.recipeId === otherRecipe && it.viewedAt === 900), "receita não-renomeada na mesma lista não é afetada — teste negativo");
  }

  console.log("");
  console.log("==================================================");
  console.log("7. BUSCA — nomes novos são acháveis (Search.searchRecipes)");
  console.log("==================================================");
  const Search = after.Search;
  [
    ["torta de maçã", "Torta de Maçã"],
    ["strudel de maça", "Strudel de Maçã"],
    ["frango cordon bleu", "Frango Cordon Bleu"],
    ["croquetes", "Croquetes"],
    ["risoto alla milanese", "Risoto alla Milanese"],
  ].forEach(([query, expectedName]) => {
    const results = Search.searchRecipes(query, { limit: 5 });
    const found = results.some((r) => r.recipe.name === expectedName);
    assert(found, '"' + query + '" acha "' + expectedName + '" (top: ' + (results[0] ? results[0].recipe.name : "nenhum") + ")");
  });
  // teste negativo: o nome ANTIGO não deveria mais ser o que a busca devolve como match de nome
  const oldNameResults = Search.searchRecipes("apple pie", { limit: 5 });
  const stillMatchesOldNameField = oldNameResults.some((r) => r.recipe.name === "Apple Pie");
  assert(!stillMatchesOldNameField, "'apple pie' não acha nenhuma receita chamada 'Apple Pie' (nome não existe mais) — teste negativo");

  console.log("");
  console.log("==================================================");
  console.log(failures === 0 ? "TODAS AS ASSERÇÕES PASSARAM" : "FALHAS: " + failures);
  console.log("==================================================");
  process.exit(failures === 0 ? 0 : 1);
}

main();
