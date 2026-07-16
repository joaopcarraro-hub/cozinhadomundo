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

  function migrateCheckedIngredients(obj) {
    const out = {};
    Object.keys(obj).forEach((oldId) => {
      const newId = migrateOldId(oldId);
      out[newId] = obj[oldId];
    });
    return out;
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          made: migrateIdList(parsed.made || []),
          favorites: migrateIdList(parsed.favorites || []),
          checkedIngredients: migrateCheckedIngredients(parsed.checkedIngredients || {}),
        };
      }
    } catch (e) {}

    // Migração do formato ainda mais antigo (só tinha "feitos", sem coleções)
    let made = [];
    try {
      const legacy = localStorage.getItem(LEGACY_MADE_KEY);
      if (legacy) made = migrateIdList(JSON.parse(legacy));
    } catch (e) {}
    return { made, favorites: [], checkedIngredients: {} };
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

  window.Storage = {
    isMade: (id) => has(state.made, id),
    toggleMade: (id) => toggleIn("made", id),
    countMade: (ids) => countIn("made", ids),

    isFavorite: (id) => has(state.favorites, id),
    toggleFavorite: (id) => toggleIn("favorites", id),

    getCheckedIngredients: (id) => state.checkedIngredients[id] || [],
    isIngredientChecked: (id, index) => {
      const arr = state.checkedIngredients[id] || [];
      return arr.indexOf(index) !== -1;
    },
    toggleIngredient: (id, index) => {
      const arr = (state.checkedIngredients[id] || []).slice();
      const i = arr.indexOf(index);
      if (i === -1) arr.push(index);
      else arr.splice(i, 1);
      state.checkedIngredients[id] = arr;
      save();
      return arr;
    },

    getAllFavorites: () => state.favorites.slice(),
    getAllMade: () => state.made.slice(),
  };
})();
