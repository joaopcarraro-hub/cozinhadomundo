// storage.js — estado local do usuário (localStorage), com migração do formato antigo.
// Formato atual: cada receita é identificada pelo seu `id` único global (TagModel).
// Formato antigo (pré-coleções): chave era "catId::nome" — migrada automaticamente no load.
(function () {
  const KEY = "cardapio-state-v2";
  const LEGACY_MADE_KEY = "cardapio-feitos-v1";

  function migrateOldId(oldId) {
    const sep = oldId.indexOf("::");
    if (sep === -1) return oldId; // já é um id novo
    const catId = oldId.slice(0, sep);
    const name = oldId.slice(sep + 2);
    const newId = window.TagModel && window.TagModel.getIdForCatAndName(catId, name);
    return newId || oldId; // se não achar a receita, mantém a chave antiga em vez de perder o dado
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
  // chaveado por "item normalizado|unit" — o mesmo ingrediente marcado numa receita aparece
  // marcado em qualquer outra receita que também precise dele.
  const SHOPPING_LIST_KEY = "gusta-lista-compras-v1";
  const SHOPPING_LIST_SCHEMA_VERSION = 1;

  // Nenhuma migração real existe ainda (schema nunca mudou desde a v1) — fica vazio até o dia
  // em que precisar de uma de verdade, mesmo padrão de PREPARO_MIGRATIONS.
  const SHOPPING_LIST_MIGRATIONS = {};

  function isValidShoppingListRecipe(r) {
    return !!r && typeof r === "object" && typeof r.recipeId === "string" && typeof r.portionMultiplier === "number" && Array.isArray(r.selectedEntries);
  }

  function normalizeShoppingKey(itemText, unit) {
    return String(itemText || "").trim().toLowerCase() + "|" + (unit || "");
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

  window.Storage = {
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
  };
})();
