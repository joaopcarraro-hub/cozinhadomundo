// storage.js — estado local do usuário (localStorage), com migração do formato antigo.
(function () {
  const KEY = "cardapio-state-v2";
  const LEGACY_MADE_KEY = "cardapio-feitos-v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          made: parsed.made || [],
          favorites: parsed.favorites || [],
          wantToCook: parsed.wantToCook || [],
          checkedIngredients: parsed.checkedIngredients || {},
        };
      }
    } catch (e) {}

    // Migração do formato antigo (só tinha "feitos")
    let made = [];
    try {
      const legacy = localStorage.getItem(LEGACY_MADE_KEY);
      if (legacy) made = JSON.parse(legacy);
    } catch (e) {}
    return { made, favorites: [], wantToCook: [], checkedIngredients: {} };
  }

  const state = load();

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }
  save(); // já grava o resultado da migração, se houve

  function recipeId(catId, name) {
    return catId + "::" + name;
  }

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

  function countIn(listName, catId, recipes) {
    return recipes.filter((r) => has(state[listName], recipeId(catId, r.name))).length;
  }

  window.Storage = {
    recipeId: recipeId,

    isMade: (catId, name) => has(state.made, recipeId(catId, name)),
    toggleMade: (catId, name) => toggleIn("made", recipeId(catId, name)),
    countMade: (catId, recipes) => countIn("made", catId, recipes),

    isFavorite: (catId, name) => has(state.favorites, recipeId(catId, name)),
    toggleFavorite: (catId, name) => toggleIn("favorites", recipeId(catId, name)),

    isWantToCook: (catId, name) => has(state.wantToCook, recipeId(catId, name)),
    toggleWantToCook: (catId, name) => toggleIn("wantToCook", recipeId(catId, name)),

    getCheckedIngredients: (catId, name) => state.checkedIngredients[recipeId(catId, name)] || [],
    isIngredientChecked: (catId, name, index) => {
      const arr = state.checkedIngredients[recipeId(catId, name)] || [];
      return arr.indexOf(index) !== -1;
    },
    toggleIngredient: (catId, name, index) => {
      const id = recipeId(catId, name);
      const arr = (state.checkedIngredients[id] || []).slice();
      const i = arr.indexOf(index);
      if (i === -1) arr.push(index);
      else arr.splice(i, 1);
      state.checkedIngredients[id] = arr;
      save();
      return arr;
    },

    getAllFavorites: () => state.favorites.slice(),
    getAllWantToCook: () => state.wantToCook.slice(),
    getAllMade: () => state.made.slice(),
  };
})();
