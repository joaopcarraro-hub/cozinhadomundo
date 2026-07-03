// tagmodel.js — camada de tags/coleções sobre os dados existentes (window.RECIPES/window.CATEGORIES).
// Não duplica o conteúdo das receitas: id e boa parte das tags são derivados em tempo de execução.
// Cada receita pode ter um campo opcional `tags` (só protein:/ingredient:, atribuído manualmente
// nos arquivos data/*.js) — as demais tags (country/dish_type/course/time/difficulty) são automáticas.
(function () {
  // ---------- tags automáticas por categoria (dish_type / course / country / protein "base") ----------
  const CATEGORY_BASE_TAGS = {
    // Fundamentos
    molhos: ["dish_type:molho", "course:acompanhamento"],
    sopas: ["dish_type:sopa", "course:entrada"],
    "entradas-frias": ["dish_type:entrada-fria", "course:entrada"],
    "entradas-quentes": ["dish_type:entrada-quente", "course:entrada"],
    massas: ["dish_type:massa", "course:principal"],
    risotos: ["dish_type:risoto", "course:principal"],
    "ovos-basicos": ["dish_type:ovo", "course:principal"],
    "ovos-classicos": ["dish_type:ovo", "course:principal"],
    padaria: ["dish_type:pao", "course:cafe-da-manha"],
    "sobremesas-classicas": ["dish_type:sobremesa", "course:sobremesa"],
    contemporaneos: ["dish_type:contemporaneo", "course:principal"],
    "tecnicas-contemporaneas-2": ["dish_type:tecnica-avancada", "course:principal"],
    // Proteínas (a categoria já indica a proteína principal)
    aves: ["protein:ave", "course:principal"],
    "carnes-bovinas": ["protein:boi", "course:principal"],
    cordeiro: ["protein:cordeiro", "course:principal"],
    suinos: ["protein:suino", "course:principal"],
    peixes: ["protein:peixe", "course:principal"],
    "frutos-do-mar": ["protein:frutos-do-mar", "course:principal"],
    arrozes: ["dish_type:arroz", "course:acompanhamento"],
    // Brasil
    brasileiros: ["country:brasil"],
    "brasil-regional": ["country:brasil"],
    // Cozinhas do Mundo — country:<id> direto
    franca: ["country:franca"],
    italia: ["country:italia"],
    espanha: ["country:espanha"],
    portugal: ["country:portugal"],
    japao: ["country:japao"],
    china: ["country:china"],
    coreia: ["country:coreia"],
    tailandia: ["country:tailandia"],
    india: ["country:india"],
    mexico: ["country:mexico"],
    peru: ["country:peru"],
    alemanha: ["country:alemanha"],
    austria: ["country:austria"],
    hungria: ["country:hungria"],
    grecia: ["country:grecia"],
    marrocos: ["country:marrocos"],
    libano: ["country:libano"],
    eua: ["country:eua"],
    dinamarca: ["country:dinamarca"],
  };

  // país mencionado no campo livre `origin` (para receitas de categorias não-país, ex.: Carbonara em "massas")
  const ORIGIN_COUNTRY_MATCHERS = [
    ["Brasil", "country:brasil"],
    ["França", "country:franca"],
    ["Itália", "country:italia"],
    ["Espanha", "country:espanha"],
    ["Portugal", "country:portugal"],
    ["Japão", "country:japao"],
    ["China", "country:china"],
    ["Coreia", "country:coreia"],
    ["Tailândia", "country:tailandia"],
    ["Índia", "country:india"],
    ["México", "country:mexico"],
    ["Peru", "country:peru"],
    ["Alemanha", "country:alemanha"],
    ["Áustria", "country:austria"],
    ["Hungria", "country:hungria"],
    ["Grécia", "country:grecia"],
    ["Marrocos", "country:marrocos"],
    ["Líbano", "country:libano"],
    ["Estados Unidos", "country:eua"],
    ["Dinamarca", "country:dinamarca"],
  ];

  function deriveCountryTagsFromOrigin(origin) {
    if (!origin) return [];
    const found = [];
    ORIGIN_COUNTRY_MATCHERS.forEach(([name, tagId]) => {
      if (origin.indexOf(name) !== -1 && found.indexOf(tagId) === -1) found.push(tagId);
    });
    return found;
  }

  function parseMinutes(timeStr) {
    if (!timeStr) return null;
    let total = 0;
    const hMatch = timeStr.match(/(\d+)\s*h/i);
    const mMatch = timeStr.match(/(\d+)\s*min/i);
    if (hMatch) total += parseInt(hMatch[1], 10) * 60;
    if (mMatch) total += parseInt(mMatch[1], 10);
    if (!hMatch && !mMatch) return null;
    return total;
  }

  // Cumulativo: uma receita de 10 min é "até 15 min" E "até 30 min" E "até 1h" —
  // assim uma coleção "Até 30 min" (filterTags: ["time:ate-30-min"]) já inclui receitas mais rápidas.
  function deriveTimeTags(recipe) {
    const totalStr = recipe.time && recipe.time.total;
    const minutes = parseMinutes(totalStr);
    if (minutes === null) return [];
    const tags = [];
    if (minutes <= 15) tags.push("time:ate-15-min");
    if (minutes <= 30) tags.push("time:ate-30-min");
    if (minutes <= 60) tags.push("time:ate-1h");
    if (minutes > 60) tags.push("time:mais-de-1h");
    return tags;
  }

  function deriveDifficultyTag(recipe) {
    const d = (recipe.difficulty || "").toLowerCase();
    if (!d) return null;
    if (d.indexOf("difícil") !== -1) return "difficulty:dificil";
    if (d.indexOf("média") !== -1) return "difficulty:media";
    if (d.indexOf("fácil") !== -1) return "difficulty:facil";
    return null;
  }

  // ---------- tags completas de uma receita (automáticas + manuais) ----------
  function getRecipeTags(catId, recipe) {
    const auto = (CATEGORY_BASE_TAGS[catId] || []).slice();
    deriveCountryTagsFromOrigin(recipe.origin).forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    deriveTimeTags(recipe).forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    const diffTag = deriveDifficultyTag(recipe);
    if (diffTag) auto.push(diffTag);
    const manual = recipe.tags || [];
    manual.forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    return auto;
  }

  // ---------- id único por receita (slug do nome, com desempate por categoria) ----------
  // Letras nórdicas (ø/å/æ) não têm forma decomposta em NFD, então são tratadas à parte.
  const EXTRA_LETTER_MAP = { "ø": "o", "å": "a", "æ": "ae" };
  function slugify(str) {
    return str
      .toString()
      .toLowerCase()
      .replace(/[øåæ]/g, (ch) => EXTRA_LETTER_MAP[ch] || ch)
      .normalize("NFD")
      .replace(new RegExp("[" + String.fromCharCode(92) + "u0300-" + String.fromCharCode(92) + "u036f]", "g"), "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  let flatCache = null;
  function getAllRecipesFlat() {
    if (flatCache) return flatCache;
    const seenIds = {};
    const list = [];
    Object.keys(window.RECIPES || {}).forEach((catId) => {
      (window.RECIPES[catId] || []).forEach((recipe) => {
        let id = slugify(recipe.name);
        if (seenIds[id]) {
          id = slugify(recipe.name + "-" + catId);
        }
        seenIds[id] = true;
        list.push({
          id: id,
          catId: catId,
          recipe: recipe,
          tags: getRecipeTags(catId, recipe),
        });
      });
    });
    flatCache = list;
    return list;
  }

  // ---------- consultas ----------
  function getTagById(tagId) {
    return (window.TAGS || []).find((t) => t.id === tagId);
  }

  function getRecipesByTags(tagIds) {
    const all = getAllRecipesFlat();
    if (!tagIds || !tagIds.length) return all;
    return all.filter((item) => tagIds.every((tagId) => item.tags.indexOf(tagId) !== -1));
  }

  function getRecipesByCollection(collectionId) {
    const collection = (window.COLLECTIONS || []).find((c) => c.id === collectionId);
    if (!collection) return [];
    return getRecipesByTags(collection.filterTags);
  }

  function getRelatedTags(selectedTagIds) {
    const filtered = getRecipesByTags(selectedTagIds);
    const counts = {};
    filtered.forEach((item) => {
      item.tags.forEach((tagId) => {
        if (selectedTagIds.indexOf(tagId) !== -1) return;
        counts[tagId] = (counts[tagId] || 0) + 1;
      });
    });
    return Object.keys(counts)
      .map((tagId) => ({ tag: getTagById(tagId), count: counts[tagId] }))
      .filter((item) => item.tag)
      .sort((a, b) => b.count - a.count);
  }

  function findRecipeById(id) {
    return getAllRecipesFlat().find((item) => item.id === id);
  }

  // ---------- validação (uso manual/console, não roda em produção) ----------
  function validateRecipeTags() {
    const validIds = new Set((window.TAGS || []).map((t) => t.id));
    const errors = [];
    getAllRecipesFlat().forEach((item) => {
      (item.recipe.tags || []).forEach((tagId) => {
        if (!validIds.has(tagId)) {
          errors.push({ id: item.id, catId: item.catId, name: item.recipe.name, invalidTagId: tagId });
        }
      });
    });
    return errors;
  }

  function findDuplicateIds() {
    const all = getAllRecipesFlat();
    const seen = {};
    const dupes = [];
    all.forEach((item) => {
      if (seen[item.id]) dupes.push(item.id);
      seen[item.id] = true;
    });
    return dupes;
  }

  window.TagModel = {
    getAllRecipesFlat,
    getRecipeTags,
    getTagById,
    getRecipesByTags,
    getRecipesByCollection,
    getRelatedTags,
    findRecipeById,
    slugify,
    validateRecipeTags,
    findDuplicateIds,
  };
})();
