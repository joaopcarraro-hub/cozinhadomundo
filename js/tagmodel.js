// tagmodel.js — camada de tags/coleções sobre os dados existentes (window.RECIPES/window.CATEGORIES).
// Não duplica o conteúdo das receitas: id e boa parte das tags são derivados em tempo de execução.
// Cada receita pode ter um campo opcional `tags` (só protein:/ingredient:, atribuído manualmente
// nos arquivos data/*.js) — as demais tags (country/dish_type/course/time/difficulty) são automáticas.
(function () {
  // ---------- tags automáticas por categoria (dish_type / course / country / protein "base") ----------
  const CATEGORY_BASE_TAGS = {
    // Fundamentos
    molhos: ["dish_type:molho", "format:molho", "course:acompanhamento"],
    sopas: ["dish_type:sopa", "course:entrada"],
    "entradas-frias": ["dish_type:entrada-fria", "course:entrada"],
    "entradas-quentes": ["dish_type:entrada-quente", "course:entrada"],
    massas: ["dish_type:massa", "course:principal"],
    risotos: ["dish_type:risoto", "course:principal"],
    "ovos-basicos": ["dish_type:ovo", "course:principal"],
    "ovos-classicos": ["dish_type:ovo", "course:principal"],
    padaria: ["dish_type:pao", "course:cafe-da-manha"],
    "sobremesas-classicas": ["dish_type:sobremesa", "course:sobremesa"],
    // contemporaneos: mistura pratos de verdade e técnicas/componentes — course:principal
    // não é aplicado automaticamente aqui, cada receita tem sua tag manual (course: ou format:).
    contemporaneos: ["dish_type:contemporaneo"],
    "tecnicas-contemporaneas-2": ["dish_type:tecnica-avancada", "format:tecnica"],
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
    const text = timeStr
      .toString()
      .toLowerCase()
      .replace("≈", "")
      .replace("cerca de", "")
      .replace("aprox.", "")
      .replace("aproximadamente", "")
      .trim();
    let total = 0;
    const hMatch = text.match(/(\d+)\s*h/);
    const mMatch = text.match(/(\d+)\s*min/);
    if (hMatch) total += parseInt(hMatch[1], 10) * 60;
    if (mMatch) total += parseInt(mMatch[1], 10);
    if (!hMatch && !mMatch) {
      const numericOnly = text.match(/^(\d+)$/);
      if (numericOnly) return parseInt(numericOnly[1], 10);
      return null;
    }
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
    if (minutes > 180) tags.push("time:preparo-longo");
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

  // ---------- ingredient:/seasoning:/water:/cuisine:/region: via dicionário canônico ----------
  // Fonte única: data/derivation-dict.js (window.DerivationDict), carregado antes deste arquivo
  // no index.html — NÃO duplica o dicionário aqui. Nunca deriva protein:/contains: — isso
  // continua exigindo julgamento humano sobre o foco real do prato (skill
  // cooking-taxonomy-architect). Substitui por completo o motor antigo (que vivia só de
  // js/tags.js + uma blocklist ad-hoc): validado via scripts/derive-tags-dry-run.js antes de
  // ligar aqui — rode esse script de novo sempre que o dicionário mudar.
  function normalizeText(s) {
    return window.DerivationDict.norm((s || "").toString());
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // needle -> entrada do DICT, pré-compilado uma vez (nunca por receita/keystroke).
  let dictNeedleCache = null;
  function getDictNeedles() {
    if (dictNeedleCache) return dictNeedleCache;
    const needles = [];
    (window.DerivationDict.DICT || []).forEach((entry) => {
      if (entry.tier === "block") return; // reservado, nenhuma entrada usa hoje
      const prefix = entry.ns === "ingredient" ? "ingredient:" : "seasoning:";
      const tagId = prefix + entry.id;
      (entry.syn || []).forEach((syn) => {
        const needle = normalizeText(syn).trim();
        if (!needle) return;
        needles.push({ tagId: tagId, entry: entry, regex: new RegExp("\\b" + escapeRegex(needle) + "\\b") });
      });
    });
    dictNeedleCache = needles;
    return needles;
  }

  // Falsos-amigos por entrada (campo `ff` do DICT): o termo é MASCARADO da linha antes do
  // teste (não a linha inteira é descartada) — assim "1 alho-poró fatiado, 2 dentes de alho"
  // ainda acha o "alho" de verdade que sobra na mesma linha.
  function maskFalseFriends(entry, normalizedLine) {
    if (!entry.ff) return normalizedLine;
    let masked = normalizedLine;
    entry.ff.forEach((phrase) => {
      masked = masked.split(normalizeText(phrase)).join(" ");
    });
    return masked;
  }

  function deriveTagsFromIngredients(recipe) {
    const lines = (recipe.ingredients || []).map(normalizeText);
    if (!lines.length) return [];
    const needles = getDictNeedles();
    const tagIds = new Set();
    const matchedEntryIds = new Set();
    lines.forEach((line) => {
      needles.forEach(({ tagId, entry, regex }) => {
        if (matchedEntryIds.has(entry.id)) return;
        if (regex.test(maskFalseFriends(entry, line))) {
          matchedEntryIds.add(entry.id);
          tagIds.add(tagId);
          if (entry.water) tagIds.add("water:" + entry.water);
        }
      });
    });
    return Array.from(tagIds);
  }

  // Parênteses que não são região geográfica mesmo dentro de um país válido (ex: "Brasil
  // (adaptação)") — mascarado com a mesma mecânica do `ff`, antes de virar region:.
  const REGION_BLOCKLIST = ["adaptacao", "adaptado", "estilo", "moderna", "tradicional", "versao", "receita"];

  // cuisine:/region: só derivam quando o país do `origin` bate em ORIGIN_COUNTRY_MATCHERS
  // (mesma lista de deriveCountryTagsFromOrigin, reaproveitada — nunca duplicada). Fora disso
  // não deriva nada, o que é correto pra Fundamentos/Técnicas Contemporâneas, cujo `origin`
  // não é geográfico (ex: "Gastronomia Contemporânea").
  function deriveTagsFromOrigin(origin) {
    if (!origin) return [];
    const m = origin.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    const parenPart = m ? m[2] : null;

    const tags = [];
    const matchedSlugs = [];
    ORIGIN_COUNTRY_MATCHERS.forEach(([name, countryTagId]) => {
      const slug = countryTagId.slice("country:".length);
      if (origin.indexOf(name) !== -1 && matchedSlugs.indexOf(slug) === -1) {
        matchedSlugs.push(slug);
        tags.push("cuisine:" + slug);
      }
    });

    if (parenPart && matchedSlugs.length) {
      let masked = normalizeText(parenPart);
      REGION_BLOCKLIST.forEach((word) => {
        masked = masked.replace(new RegExp("\\b" + word + "\\b", "g"), " ");
      });
      const slug = masked.trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      if (slug) tags.push("region:" + slug);
    }

    return tags;
  }

  // ---------- equipment: (Fase 3) — deriva de steps, não de ingredients ----------
  let equipmentNeedleCache = null;
  function getEquipmentNeedles() {
    if (equipmentNeedleCache) return equipmentNeedleCache;
    const needles = [];
    (window.DerivationDict.EQUIPMENT || []).forEach((entry) => {
      const tagId = "equipment:" + entry.id;
      (entry.syn || []).forEach((syn) => {
        const needle = normalizeText(syn).trim();
        if (!needle) return;
        needles.push({ tagId: tagId, entry: entry, regex: new RegExp("\\b" + escapeRegex(needle) + "\\b") });
      });
    });
    equipmentNeedleCache = needles;
    return needles;
  }

  // Maior número no texto de yield ("4-6 porções" -> 6, "1 pão grande" -> 1) — usado só pro
  // corte condicional de equipment:air-fryer abaixo.
  function maxYieldNumber(yieldStr) {
    if (!yieldStr) return null;
    const nums = (String(yieldStr).match(/\d+/g) || []).map(Number);
    return nums.length ? Math.max.apply(null, nums) : null;
  }

  // "Porção pequena" pra air-fryer exige as 3 condições (ver data/derivation-dict.js pro
  // racional completo, validado via scripts/derive-equipment-dry-run.js): maior número do yield
  // <= AIRFRYER_MAX_YIELD, pelo menos um sinal positivo (porç/unidade/individual/pequen) e
  // nenhum sinal negativo (grande/grandes) — um número baixo sozinho não basta, porque "1 pão
  // grande"/"3 baguetes"/"≈2 L" têm número baixo mas descrevem item grande ou unidade de medida.
  function isSmallYieldForAirFryer(yieldStr) {
    if (!yieldStr) return false;
    const dict = window.DerivationDict;
    const max = maxYieldNumber(yieldStr);
    if (max === null || max > dict.AIRFRYER_MAX_YIELD) return false;
    const normalized = normalizeText(String(yieldStr));
    if (dict.AIRFRYER_YIELD_NEGATIVE.some((w) => normalized.indexOf(w) !== -1)) return false;
    return dict.AIRFRYER_YIELD_POSITIVE.some((w) => normalized.indexOf(w) !== -1);
  }

  let roastVerbRegexCache = null;
  function getRoastVerbRegexes() {
    if (roastVerbRegexCache) return roastVerbRegexCache;
    roastVerbRegexCache = (window.DerivationDict.ROAST_VERBS || []).map(
      (v) => new RegExp("\\b" + escapeRegex(normalizeText(v)) + "\\b")
    );
    return roastVerbRegexCache;
  }

  // equipment:forno sempre deriva de substantivo (forno/refratario/assadeira) OU dos verbos de
  // assar (já inclusos no syn de equipment:forno, ver DICT). equipment:air-fryer deriva do termo
  // direto (air fryer/airfryer) SEMPRE, e também dos MESMOS verbos de assar — mas só quando
  // isSmallYieldForAirFryer(recipe.yield) for true. Dado multi-valorado (uma receita pode ter
  // vários equipment: simultaneamente); a faceta na UI é seleção única.
  function deriveTagsFromSteps(recipe) {
    const lines = (recipe.steps || []).map(normalizeText);
    if (!lines.length) return [];
    const needles = getEquipmentNeedles();
    const tagIds = new Set();
    const matchedEntryIds = new Set();
    lines.forEach((line) => {
      needles.forEach(({ tagId, entry, regex }) => {
        if (matchedEntryIds.has(entry.id)) return;
        if (regex.test(maskFalseFriends(entry, line))) {
          matchedEntryIds.add(entry.id);
          tagIds.add(tagId);
        }
      });
    });

    if (!tagIds.has("equipment:air-fryer") && isSmallYieldForAirFryer(recipe.yield)) {
      const roastRegexes = getRoastVerbRegexes();
      if (lines.some((line) => roastRegexes.some((re) => re.test(line)))) {
        tagIds.add("equipment:air-fryer");
      }
    }

    return Array.from(tagIds);
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
    deriveTagsFromIngredients(recipe).forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    deriveTagsFromOrigin(recipe.origin).forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    deriveTagsFromSteps(recipe).forEach((t) => {
      if (auto.indexOf(t) === -1) auto.push(t);
    });
    return auto;
  }

  // ---------- validação manual (console) — nunca roda em produção ----------
  // Pra cada ingredient:/seasoning:/cuisine:/region: que a derivação achou, imprime até 5
  // receitas de exemplo. Rode TagModel.validateDerivedTags() no console pra conferir
  // falso-positivo rápido; pra um relatório completo (médias, amostra, auditoria de risco),
  // rode `node scripts/derive-tags-dry-run.js` no repositório.
  function validateDerivedTags() {
    const all = getAllRecipesFlat();
    const byTag = {};
    all.forEach((item) => {
      deriveTagsFromIngredients(item.recipe)
        .concat(deriveTagsFromOrigin(item.recipe.origin))
        .concat(deriveTagsFromSteps(item.recipe))
        .forEach((tagId) => {
          if (!byTag[tagId]) byTag[tagId] = [];
          if (byTag[tagId].length < 5) byTag[tagId].push(item.recipe.name + " (" + item.catId + ")");
        });
    });
    Object.keys(byTag)
      .sort()
      .forEach((tagId) => {
        console.log(tagId + ":");
        byTag[tagId].forEach((name) => console.log("  - " + name));
      });
    return byTag;
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

  // AND — usado pela busca facetada (o usuário escolhe cada tag deliberadamente, quer todas juntas).
  function getRecipesByTags(tagIds) {
    const all = getAllRecipesFlat();
    if (!tagIds || !tagIds.length) return all;
    return all.filter((item) => tagIds.every((tagId) => item.tags.indexOf(tagId) !== -1));
  }

  // OR — usado pelas coleções (uma coleção é definida por "qualquer uma destas tags", não todas).
  function matchesAnyTag(itemTags, filterTags) {
    return (filterTags || []).some((tagId) => itemTags.indexOf(tagId) !== -1);
  }

  // Retorna as receitas de uma coleção já separadas por relevância:
  // principais (bateram em primaryFilterTags) e relacionadas (só bateram em relatedFilterTags).
  function getRecipesByCollection(collectionId) {
    const collection = (window.COLLECTIONS || []).find((c) => c.id === collectionId);
    if (!collection) return { collection: null, primaryRecipes: [], relatedRecipes: [], allRecipes: [] };
    const all = getAllRecipesFlat();
    const primaryRecipes = all.filter((item) => matchesAnyTag(item.tags, collection.primaryFilterTags));
    const primaryIds = new Set(primaryRecipes.map((item) => item.id));
    const relatedRecipes = collection.relatedFilterTags
      ? all.filter((item) => !primaryIds.has(item.id) && matchesAnyTag(item.tags, collection.relatedFilterTags))
      : [];
    return { collection, primaryRecipes, relatedRecipes, allRecipes: primaryRecipes.concat(relatedRecipes) };
  }

  // ---------- relevância e ordenação ----------
  function getCollectionRelevanceScore(item, collection) {
    if (!collection) return 0;
    let score = 0;
    if (matchesAnyTag(item.tags, collection.primaryFilterTags)) score += 100;
    if (collection.relatedFilterTags && matchesAnyTag(item.tags, collection.relatedFilterTags)) score += 40;
    return score;
  }

  const DIFFICULTY_RANK = { facil: 1, media: 2, dificil: 3 };
  function getDifficultyRank(recipe) {
    const d = (recipe.difficulty || "").toLowerCase();
    if (d.indexOf("difícil") !== -1 || d.indexOf("dificil") !== -1) return 3;
    if (d.indexOf("média") !== -1 || d.indexOf("media") !== -1) return 2;
    if (d.indexOf("fácil") !== -1 || d.indexOf("facil") !== -1) return 1;
    return 99;
  }

  function normalizeForSort(value) {
    return (value || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(new RegExp("[" + String.fromCharCode(92) + "u0300-" + String.fromCharCode(92) + "u036f]", "g"), "");
  }

  const SORT_OPTIONS = [
    { key: "relevance", label: "Relevância" },
    { key: "recipe-az", label: "Nome da receita A-Z" },
    { key: "time-asc", label: "Tempo: menor primeiro" },
    { key: "time-desc", label: "Tempo: maior primeiro" },
    { key: "difficulty-asc", label: "Dificuldade: fácil primeiro" },
    { key: "difficulty-desc", label: "Dificuldade: difícil primeiro" },
    { key: "favorites-first", label: "Favoritas primeiro" },
    { key: "not-made-first", label: "Não feitas primeiro" },
  ];

  function getCategoryLabel(item) {
    const cat = (window.CATEGORIES || []).find((c) => c.id === item.catId);
    return cat ? cat.label : item.catId || "";
  }

  function sortRecipeItems(items, sortKey, collection) {
    const sorted = items.slice();
    const Storage = window.Storage;
    sorted.sort((a, b) => {
      if (sortKey === "recipe-az") {
        return normalizeForSort(a.recipe.name).localeCompare(normalizeForSort(b.recipe.name));
      }
      if (sortKey === "time-asc" || sortKey === "time-desc") {
        const ta = parseMinutes(a.recipe.time && a.recipe.time.total);
        const tb = parseMinutes(b.recipe.time && b.recipe.time.total);
        const va = ta === null ? 99999 : ta;
        const vb = tb === null ? 99999 : tb;
        return sortKey === "time-asc" ? va - vb : vb - va;
      }
      if (sortKey === "difficulty-asc") return getDifficultyRank(a.recipe) - getDifficultyRank(b.recipe);
      if (sortKey === "difficulty-desc") return getDifficultyRank(b.recipe) - getDifficultyRank(a.recipe);
      if (sortKey === "favorites-first" && Storage) {
        return Number(Storage.isFavorite(b.id)) - Number(Storage.isFavorite(a.id));
      }
      if (sortKey === "not-made-first" && Storage) {
        return Number(Storage.isMade(a.id)) - Number(Storage.isMade(b.id));
      }
      // relevância (padrão)
      return getCollectionRelevanceScore(b, collection) - getCollectionRelevanceScore(a, collection);
    });
    return sorted;
  }

  // ---------- preferência de ordenação por coleção (localStorage) ----------
  const SORT_PREF_KEY = "cardapio-collection-sort";
  function getCollectionSort(collectionId) {
    try {
      const raw = localStorage.getItem(SORT_PREF_KEY);
      if (!raw) return null;
      return JSON.parse(raw)[collectionId] || null;
    } catch (e) {
      return null;
    }
  }
  function setCollectionSort(collectionId, sortKey) {
    try {
      const raw = localStorage.getItem(SORT_PREF_KEY);
      const data = raw ? JSON.parse(raw) : {};
      data[collectionId] = sortKey;
      localStorage.setItem(SORT_PREF_KEY, JSON.stringify(data));
    } catch (e) {}
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
      .sort((a, b) => {
        // tags lowPriority (ex: ingredient:alho, ingredient:cebola) afundam pro final
        // mesmo com contagem alta — servem pra busca textual, não pra poluir os chips de refino.
        const aLow = !!a.tag.lowPriority;
        const bLow = !!b.tag.lowPriority;
        if (aLow !== bLow) return aLow ? 1 : -1;
        return b.count - a.count;
      });
  }

  // ---------- camadas de tags (primary/secondary/search) ----------
  // Derivadas em tempo de execução a partir do array de tags já existente — não migra dado
  // armazenado, só reclassifica o que já existe. primary = identidade do prato; secondary =
  // o que o prato leva/contém mas não define o que ele é; search = auxiliar (lowPriority),
  // serve pra busca textual mas não deve poluir chips de refino.
  const PRIMARY_TAG_PREFIXES = ["country:", "dish_type:", "course:", "format:", "technique:", "protein:", "diet:"];
  const SECONDARY_TAG_PREFIXES = ["contains:", "ingredient:"];
  function getTagLayers(item) {
    const tagIds = (item && item.tags) || [];
    const primaryTags = [];
    const secondaryTags = [];
    const searchTags = [];
    tagIds.forEach((tagId) => {
      const tag = getTagById(tagId);
      if (!tag) return;
      if (tag.lowPriority) {
        searchTags.push(tagId);
      } else if (PRIMARY_TAG_PREFIXES.some((p) => tagId.indexOf(p) === 0)) {
        primaryTags.push(tagId);
      } else if (SECONDARY_TAG_PREFIXES.some((p) => tagId.indexOf(p) === 0)) {
        secondaryTags.push(tagId);
      }
    });
    return { primaryTags: primaryTags, secondaryTags: secondaryTags, searchTags: searchTags };
  }

  // ---------- refinamento guiado por tipo de coleção ----------
  // País: 1ª camada = identidade (tipo de prato/proteína/formato/dieta), só depois de escolher
  // uma delas é que tempo/dificuldade/técnica aparecem — evita jogar 20 filtros de uma vez.
  // Outros tipos usam a mesma ideia com prefixos diferentes (ver spec de collectionType).
  const GUIDED_LAYER1_BY_TYPE = {
    country: ["dish_type:", "protein:", "format:", "diet:"],
    protein: ["dish_type:", "country:"],
    dishType: ["country:", "protein:"],
    time: ["dish_type:", "protein:", "country:"],
    difficulty: ["dish_type:", "time:", "protein:"],
  };
  function getGuidedRelatedTags(selectedTagIds, collectionType) {
    const related = getRelatedTags(selectedTagIds);
    const layer1Prefixes = GUIDED_LAYER1_BY_TYPE[collectionType];
    if (!layer1Prefixes) return related;
    const hasLayer1 = selectedTagIds.some((id) => layer1Prefixes.some((p) => id.indexOf(p) === 0));
    if (hasLayer1) return related;
    const layer1Related = related.filter((r) => layer1Prefixes.some((p) => r.tag.id.indexOf(p) === 0));
    return layer1Related.length ? layer1Related : related;
  }

  // Heurística pra saber "que tipo de busca é essa" quando não há uma coleção fixa (ex: busca
  // facetada livre) — olha a primeira tag reconhecida na seleção atual, país > proteína > tipo > tempo > dificuldade.
  function inferCollectionTypeFromTags(tagIds) {
    if (tagIds.some((id) => id.indexOf("country:") === 0)) return "country";
    if (tagIds.some((id) => id.indexOf("protein:") === 0)) return "protein";
    if (tagIds.some((id) => id.indexOf("dish_type:") === 0)) return "dishType";
    if (tagIds.some((id) => id.indexOf("time:") === 0)) return "time";
    if (tagIds.some((id) => id.indexOf("difficulty:") === 0)) return "difficulty";
    return null;
  }

  function findRecipeById(id) {
    return getAllRecipesFlat().find((item) => item.id === id);
  }

  // usado para migrar chaves antigas ("catId::nome") e para casar resultados do search.js
  function getIdForCatAndName(catId, name) {
    const item = getAllRecipesFlat().find((i) => i.catId === catId && i.recipe.name === name);
    return item ? item.id : null;
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
    getTagLayers,
    getGuidedRelatedTags,
    inferCollectionTypeFromTags,
    findRecipeById,
    getIdForCatAndName,
    slugify,
    parseMinutes,
    validateRecipeTags,
    findDuplicateIds,
    deriveTagsFromIngredients,
    deriveTagsFromOrigin,
    deriveTagsFromSteps,
    validateDerivedTags,
    getCollectionRelevanceScore,
    sortRecipeItems,
    SORT_OPTIONS,
    getCollectionSort,
    setCollectionSort,
    getCategoryLabel,
  };
})();
