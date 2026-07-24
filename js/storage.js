// storage.js — estado local do usuário (localStorage), com migração do formato antigo.
// Formato atual: cada receita é identificada pelo seu `id` único global (TagModel).
// Formato antigo (pré-coleções): chave era "catId::nome" — migrada automaticamente no load.
(function () {
  const KEY = "cardapio-state-v2";
  const LEGACY_MADE_KEY = "cardapio-feitos-v1";

  // Slug antigo -> slug novo pra receitas renomeadas (recipe.name em português, 2026-07-24 —
  // ver skill recipe-data-quality). O id é slugify(recipe.name); renomear muda o slug, então
  // qualquer chave salva (favoritas/feitas aqui, "últimas visitadas" em RECENT_KEY abaixo)
  // precisa ser traduzida ou o dado do usuário fica órfão. Compartilhado pelas duas migrações
  // desta leva — mesmo mapa, dois pontos de aplicação (ver migrateOldId e loadRecent).
  const RENAME_SLUG_MAP = {
    "apfelstrudel": "strudel-de-maca",
    "shank-de-cordeiro": "jarrete-de-cordeiro",
    "croquetas": "croquetes",
    "apple-pie": "torta-de-maca",
    "buffalo-wings": "asinhas-de-frango-buffalo",
    "clam-chowder": "chowder-de-ameijoas",
    "fried-chicken": "frango-frito-americano",
    "salade-nicoise": "salada-nicoise",
    "pain-de-campagne": "pao-rustico",
    "risotto-ai-frutti-di-mare": "risoto-ai-frutti-di-mare",
    "risotto-ai-funghi": "risoto-ai-funghi",
    "risotto-al-limone": "risoto-al-limone",
    "risotto-al-parmigiano": "risoto-al-parmigiano",
    "risotto-alla-barbabietola-beterraba": "risoto-alla-barbabietola-beterraba",
    "risotto-alla-milanese": "risoto-alla-milanese",
    "risotto-alla-zucca-abobora": "risoto-alla-zucca-abobora",
    "lemon-tart": "torta-de-limao",
    "mille-feuille": "mil-folhas",
    "french-onion-soup": "sopa-de-cebola-francesa",
    "green-curry-gaeng-keow-wan": "curry-verde-gaeng-keow-wan",
    "red-curry-gaeng-phed": "curry-vermelho-gaeng-phed",
    "dry-aging-maturacao-seca": "maturacao-seca-dry-aging",
    "wienerbrod-danish-pastry": "wienerbrod-massa-folhada-dinamarquesa",
    "chicken-cordon-bleu": "frango-cordon-bleu",
    "chicken-paprikash": "frango-paprikash",
  };

  function migrateOldId(oldId) {
    const sep = oldId.indexOf("::");
    let id = oldId;
    if (sep !== -1) {
      const catId = oldId.slice(0, sep);
      const name = oldId.slice(sep + 2);
      const newId = window.TagModel && window.TagModel.getIdForCatAndName(catId, name);
      id = newId || oldId; // se não achar a receita, mantém a chave antiga em vez de perder o dado
    }
    return RENAME_SLUG_MAP[id] || id;
  }

  function migrateIdList(list) {
    const migrated = list.map(migrateOldId);
    return migrated.filter((id, i) => migrated.indexOf(id) === i); // dedupe
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          made: migrateIdList(parsed.made || []),
          favorites: migrateIdList(parsed.favorites || []),
        };
      }
    } catch (e) {}

    // Migração do formato ainda mais antigo (só tinha "feitos", sem coleções)
    let made = [];
    try {
      const legacy = localStorage.getItem(LEGACY_MADE_KEY);
      if (legacy) made = migrateIdList(JSON.parse(legacy));
    } catch (e) {}
    return { made, favorites: [] };
  }

  const state = load();

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }
  save(); // já grava o resultado da migração, se houve

  function has(list, id) {
    return list.indexOf(id) !== -1;
  }

  function toggleIn(listName, id) {
    const list = state[listName];
    const i = list.indexOf(id);
    if (i === -1) list.push(id);
    else list.splice(i, 1);
    save();
    return has(list, id);
  }

  function countIn(listName, ids) {
    return ids.filter((id) => has(state[listName], id)).length;
  }

  // ---------- Modo de preparo: sessão por receita (Fase 1 — schema + persistência) ----------
  // Chave própria (não entra no cardapio-state-v2 acima — domínio separado, versionado à parte).
  // Timer é por PASSO, não por sessão inteira: cada stepIndex guarda seu próprio
  // {endsAt, remainingSeconds, running}. endsAt é horário absoluto (Date.now() + duração) —
  // ao retomar, o restante é recalculado pela diferença real de relógio (endsAt - now), nunca
  // assumindo que o JS ficou rodando contínuo (funciona depois de fechar/reabrir a aba).
  const PREPARO_KEY = "gusta-preparos-v1";
  const PREPARO_SCHEMA_VERSION = 1;

  // Migração seletiva por versão antiga — cada entrada recebe o objeto salvo NA versão indicada
  // pela chave e devolve o objeto já convertido pra versão seguinte (loadPreparo encadeia até
  // bater na atual, ver abaixo). Nenhuma migração real existe ainda (o schema nunca mudou desde
  // a v1) — fica vazio até o dia em que precisar de uma de verdade.
  const PREPARO_MIGRATIONS = {};

  // Nível 2: uma sessão é válida se os 4 campos que o resto do app depende de verdade baterem
  // no tipo esperado. Sessão que falhar aqui é descartada sozinha, sem derrubar as outras.
  function isValidPreparoSession(s) {
    return (
      !!s &&
      typeof s === "object" &&
      typeof s.recipeId === "string" &&
      typeof s.currentStep === "number" &&
      !!s.stepTimers &&
      typeof s.stepTimers === "object" &&
      typeof s.status === "string"
    );
  }

  function loadPreparo() {
    const empty = { version: PREPARO_SCHEMA_VERSION, sessions: {} };
    try {
      const raw = localStorage.getItem(PREPARO_KEY);
      if (!raw) return empty;
      let parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return empty; // corrompido de um jeito irrecuperável

      // Nível 1: sobe de versão em versão enquanto existir migração registrada pra versão
      // salva. Só reseta tudo se a versão for genuinamente desconhecida (sem migração
      // registrada) — nunca só por ser diferente da atual.
      let hops = 0;
      while (parsed.version !== PREPARO_SCHEMA_VERSION) {
        const migrate = PREPARO_MIGRATIONS[parsed.version];
        if (!migrate) return empty; // versão sem migração conhecida — irrecuperável
        parsed = migrate(parsed);
        if (!parsed || typeof parsed !== "object") return empty;
        hops++;
        if (hops > 20) return empty; // guarda contra migração mal escrita em loop
      }

      if (!parsed.sessions || typeof parsed.sessions !== "object") return empty;

      const sessions = {};
      Object.keys(parsed.sessions).forEach((recipeId) => {
        if (isValidPreparoSession(parsed.sessions[recipeId])) sessions[recipeId] = parsed.sessions[recipeId];
      });
      return { version: PREPARO_SCHEMA_VERSION, sessions };
    } catch (e) {
      return empty;
    }
  }

  const preparoState = loadPreparo();

  function savePreparo() {
    try {
      localStorage.setItem(PREPARO_KEY, JSON.stringify(preparoState));
    } catch (e) {}
  }

  // ---------- Lista de compras (Fase 1 — schema + "por receita") ----------
  // Mesmo padrão de 2 níveis de gusta-preparos-v1 (migração seletiva por versão + validação
  // individual, ver acima) — projetado com o mapa de migração desde a v1, não como remendo
  // depois. selectedEntries guarda só os ÍNDICES das linhas de ingredientsStructured que
  // entraram na lista pra aquela receita (nunca copia texto/qty/unit — sempre resolve contra
  // ingredientsStructured na hora de exibir, com o portionMultiplier salvo na hora de
  // adicionar). "Comprado" NÃO é por receita: boughtKeys é um registro único e compartilhado,
  // chaveado por "núcleo de compra|unit" (v2) — o mesmo ingrediente marcado numa receita
  // aparece marcado em qualquer outra receita que também precise dele, mesmo que o texto
  // difira ("leite morno" numa, "leite" noutra: ambos viram "leite integral|...").
  const SHOPPING_LIST_KEY = "gusta-lista-compras-v1";
  const SHOPPING_LIST_SCHEMA_VERSION = 2;

  // Núcleo de compra via ShoppingDict (data/shopping-dict.js — precisa carregar ANTES deste
  // arquivo no index.html). O fallback trim+lowercase só existe pra degradar graciosamente
  // (comportamento antigo) se o dicionário não carregou — nesse caso a migração abaixo também
  // não reescreve nada, então chave gravada e chave consultada ficam sempre consistentes.
  function shoppingCore(itemText) {
    const t = String(itemText || "").trim().toLowerCase();
    return typeof window !== "undefined" && window.ShoppingDict ? window.ShoppingDict.purchaseCore(t) : t;
  }

  const SHOPPING_LIST_MIGRATIONS = {
    // v1→v2 (2026-07-23): boughtKeys deixam de usar o texto literal do item e passam pro
    // núcleo de compra (mesma normalização do agrupamento da visão Geral). Split no ÚLTIMO
    // pipe com a unit validada contra o enum do dicionário — se a chave não parsear (unit
    // desconhecida), preserva a chave original intacta em vez de arriscar corromper.
    // Colisões ("azeite|" e "azeite de oliva|" viram ambas "azeite extra virgem|") fundem
    // no mesmo true — sem perda: as duas já estavam compradas.
    1: (parsed) => {
      const oldKeys = parsed.boughtKeys && typeof parsed.boughtKeys === "object" ? parsed.boughtKeys : {};
      const dict = typeof window !== "undefined" ? window.ShoppingDict : null;
      const newKeys = {};
      Object.keys(oldKeys).forEach((key) => {
        if (!oldKeys[key]) return;
        const idx = key.lastIndexOf("|");
        const unit = idx === -1 ? null : key.slice(idx + 1);
        const unitOk = unit === "" || (unit && dict && dict.KNOWN_UNITS[unit]);
        if (idx === -1 || !unitOk || !dict) {
          newKeys[key] = true; // não parseável (ou sem dicionário) — preserva como está
          return;
        }
        newKeys[shoppingCore(key.slice(0, idx)) + "|" + unit] = true;
      });
      return { version: 2, recipes: parsed.recipes && typeof parsed.recipes === "object" ? parsed.recipes : {}, boughtKeys: newKeys };
    },
  };

  function isValidShoppingListRecipe(r) {
    return !!r && typeof r === "object" && typeof r.recipeId === "string" && typeof r.portionMultiplier === "number" && Array.isArray(r.selectedEntries);
  }

  function normalizeShoppingKey(itemText, unit) {
    return shoppingCore(itemText) + "|" + (unit || "");
  }

  function loadShoppingList() {
    const empty = { version: SHOPPING_LIST_SCHEMA_VERSION, recipes: {}, boughtKeys: {} };
    try {
      const raw = localStorage.getItem(SHOPPING_LIST_KEY);
      if (!raw) return empty;
      let parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return empty; // corrompido de um jeito irrecuperável

      let hops = 0;
      while (parsed.version !== SHOPPING_LIST_SCHEMA_VERSION) {
        const migrate = SHOPPING_LIST_MIGRATIONS[parsed.version];
        if (!migrate) return empty; // versão sem migração conhecida — irrecuperável
        parsed = migrate(parsed);
        if (!parsed || typeof parsed !== "object") return empty;
        hops++;
        if (hops > 20) return empty; // guarda contra migração mal escrita em loop
      }

      if (!parsed.recipes || typeof parsed.recipes !== "object") return empty;

      const recipes = {};
      Object.keys(parsed.recipes).forEach((recipeId) => {
        if (isValidShoppingListRecipe(parsed.recipes[recipeId])) recipes[recipeId] = parsed.recipes[recipeId];
      });

      const boughtKeys = parsed.boughtKeys && typeof parsed.boughtKeys === "object" ? parsed.boughtKeys : {};

      return { version: SHOPPING_LIST_SCHEMA_VERSION, recipes, boughtKeys };
    } catch (e) {
      return empty;
    }
  }

  const shoppingListState = loadShoppingList();

  function saveShoppingList() {
    try {
      localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(shoppingListState));
    } catch (e) {}
  }

  // ---------- Últimas receitas visitadas (só rastreamento — sem UI de carrossel ainda) ----------
  // Mesmo padrão de 2 níveis das outras chaves versionadas (migração seletiva + validação
  // individual, ver gusta-preparos-v1/gusta-lista-compras-v1 acima). Lista ORDENADA (mais
  // recente primeiro) — por isso array, não objeto chaveado por id (a ordem em si é o dado).
  // Reabrir uma receita já vista remove a entrada antiga e reinsere no topo (nunca duplica);
  // limitada a RECENT_MAX_ITEMS (a mais antiga sai quando uma nova entra além do limite).
  const RECENT_KEY = "gusta-recentes-v1";
  const RECENT_SCHEMA_VERSION = 1;
  const RECENT_MAX_ITEMS = 10;

  // Nenhuma migração de SCHEMA existe ainda (a forma {version, items:[{recipeId,viewedAt}]}
  // nunca mudou desde a v1) — mesmo estado inicial de PREPARO_MIGRATIONS/SHOPPING_LIST_MIGRATIONS
  // quando foram criadas. RENAME_SLUG_MAP (acima) NÃO entra aqui: é uma tradução de VALOR de
  // recipeId dentro do MESMO schema, não uma migração estrutural entre versões — colocá-la
  // num "migrate(parsed) de version 1 pra version 1" forçaria um hop falso. Aplicada direto no
  // recipeId de cada item ao carregar (mesmo padrão de migrateOldId: traduz se achar no mapa,
  // mantém como está se não achar).
  const RECENT_MIGRATIONS = {};

  function isValidRecentItem(item) {
    return !!item && typeof item === "object" && typeof item.recipeId === "string" && typeof item.viewedAt === "number";
  }

  function loadRecent() {
    const empty = { version: RECENT_SCHEMA_VERSION, items: [] };
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (!raw) return empty;
      let parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return empty; // corrompido de um jeito irrecuperável

      let hops = 0;
      while (parsed.version !== RECENT_SCHEMA_VERSION) {
        const migrate = RECENT_MIGRATIONS[parsed.version];
        if (!migrate) return empty; // versão sem migração conhecida — irrecuperável
        parsed = migrate(parsed);
        if (!parsed || typeof parsed !== "object") return empty;
        hops++;
        if (hops > 20) return empty; // guarda contra migração mal escrita em loop
      }

      const items = (Array.isArray(parsed.items) ? parsed.items.filter(isValidRecentItem) : []).map((item) => ({
        recipeId: RENAME_SLUG_MAP[item.recipeId] || item.recipeId,
        viewedAt: item.viewedAt,
      }));
      return { version: RECENT_SCHEMA_VERSION, items: items.slice(0, RECENT_MAX_ITEMS) };
    } catch (e) {
      return empty;
    }
  }

  const recentState = loadRecent();

  function saveRecent() {
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(recentState));
    } catch (e) {}
  }

  window.Storage = {
    // Exposto pra Router aplicar o MESMO alias em #/receita/:id e #/cozinhar/:id — fonte única,
    // sem duplicar os 25 pares num segundo arquivo.
    RENAME_SLUG_MAP: RENAME_SLUG_MAP,
    isMade: (id) => has(state.made, id),
    toggleMade: (id) => toggleIn("made", id),
    countMade: (ids) => countIn("made", ids),

    isFavorite: (id) => has(state.favorites, id),
    toggleFavorite: (id) => toggleIn("favorites", id),

    getAllFavorites: () => state.favorites.slice(),
    getAllMade: () => state.made.slice(),

    // Sessão do modo de preparo — retorna null se a receita nunca foi iniciada (status pode
    // ser "em-andamento" ou "concluido"; quem chama decide se retoma ou começa nova a partir
    // do status, ver renderCookMode em app.js).
    getPreparoSession: (recipeId) => preparoState.sessions[recipeId] || null,
    startPreparoSession: (recipeId, portionMultiplier) => {
      const session = {
        recipeId,
        startedAt: Date.now(),
        currentStep: 0,
        portionMultiplier: portionMultiplier || 1,
        stepTimers: {},
        status: "em-andamento",
      };
      preparoState.sessions[recipeId] = session;
      savePreparo();
      return session;
    },
    savePreparoStep: (recipeId, stepIndex) => {
      const session = preparoState.sessions[recipeId];
      if (!session) return;
      session.currentStep = stepIndex;
      savePreparo();
    },
    savePreparoStepTimer: (recipeId, stepIndex, timerState) => {
      const session = preparoState.sessions[recipeId];
      if (!session) return;
      session.stepTimers[stepIndex] = timerState;
      savePreparo();
    },
    finishPreparoSession: (recipeId) => {
      const session = preparoState.sessions[recipeId];
      if (!session) return;
      session.status = "concluido";
      savePreparo();
    },
    // Só as "em-andamento" — usado pela aba Preparos (Fase 2). "concluido" nunca aparece lá.
    getActivePreparoSessions: () =>
      Object.values(preparoState.sessions).filter((s) => s.status === "em-andamento"),
    // Remove a sessão por completo do localStorage (não só marca como concluída/escondida).
    deletePreparoSession: (recipeId) => {
      delete preparoState.sessions[recipeId];
      savePreparo();
    },

    // Lista de compras — adicionar sempre substitui a entrada da receita inteira (portas de
    // entrada nesta fase só adicionam TODAS as entries de uma vez, ver renderReceita/app.js),
    // atualizando portionMultiplier/addedAt/selectedEntries pro estado atual.
    addRecipeToShoppingList: (recipeId, portionMultiplier, entryIndexes) => {
      shoppingListState.recipes[recipeId] = {
        recipeId,
        portionMultiplier: portionMultiplier || 1,
        addedAt: Date.now(),
        selectedEntries: (entryIndexes || []).slice(),
      };
      saveShoppingList();
    },
    isRecipeInShoppingList: (recipeId) => !!shoppingListState.recipes[recipeId],
    // Remove SÓ essa receita (botão "Na lista de compras" virando toggle de verdade, ou "x" na
    // visão Por receita) — boughtKeys NÃO é limpo aqui (é compartilhado por item+unit, não por
    // receita; outra receita pode ainda referenciar o mesmo item). Órfão inofensivo até "Limpar
    // lista" zerar tudo.
    removeRecipeFromShoppingList: (recipeId) => {
      delete shoppingListState.recipes[recipeId];
      saveShoppingList();
    },
    // Ordenado por addedAt — visão "por receita" mostra na ordem em que foram adicionadas.
    getShoppingListRecipes: () =>
      Object.values(shoppingListState.recipes)
        .slice()
        .sort((a, b) => a.addedAt - b.addedAt),
    isShoppingItemBought: (itemText, unit) => !!shoppingListState.boughtKeys[normalizeShoppingKey(itemText, unit)],
    // Chave compartilhada entre receitas — marcar num lugar reflete em qualquer outra receita
    // que tenha o mesmo item+unit.
    toggleShoppingItemBought: (itemText, unit) => {
      const key = normalizeShoppingKey(itemText, unit);
      if (shoppingListState.boughtKeys[key]) delete shoppingListState.boughtKeys[key];
      else shoppingListState.boughtKeys[key] = true;
      saveShoppingList();
      return !!shoppingListState.boughtKeys[key];
    },
    // Remove tudo — receitas E o registro de comprados, volta ao estado vazio.
    clearShoppingList: () => {
      shoppingListState.recipes = {};
      shoppingListState.boughtKeys = {};
      saveShoppingList();
    },

    // Últimas receitas visitadas — chame ao ABRIR a tela de uma receita (renderReceita).
    // Reabrir uma já vista sobe ela pro topo em vez de duplicar; corta em RECENT_MAX_ITEMS (a
    // mais antiga sai). Só rastreamento por ora — nenhuma tela/carrossel novo usa isto ainda,
    // ver getRecentlyViewed.
    recordRecipeView: (recipeId) => {
      recentState.items = recentState.items.filter((item) => item.recipeId !== recipeId);
      recentState.items.unshift({ recipeId, viewedAt: Date.now() });
      recentState.items = recentState.items.slice(0, RECENT_MAX_ITEMS);
      saveRecent();
    },
    // Mais recente primeiro (ordem já é a de armazenamento). Devolve {recipeId, viewedAt} —
    // resolver dados de exibição (nome, imagem) fica por conta de quem for construir a UI depois.
    getRecentlyViewed: () => recentState.items.slice(),
  };
})();
