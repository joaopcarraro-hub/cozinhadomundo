// search.js — busca global (todas as categorias) com pontuação por campo.
(function () {
  function norm(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(new RegExp("[̀-ͯ]", "g"), ""); // remove acentos, pra "cafe" achar "café"
  }

  function buildIndex() {
    const items = [];
    const categories = window.CATEGORIES || [];
    Object.keys(window.RECIPES || {}).forEach((catId) => {
      const cat = categories.find((c) => c.id === catId);
      (window.RECIPES[catId] || []).forEach((r) => {
        items.push({ catId: catId, catLabel: cat ? cat.label : catId, recipe: r });
      });
    });
    return items;
  }

  // Pesos por campo — nome/categoria/origem pesam mais que descrição.
  const WEIGHTS = {
    nome: 5,
    categoria: 4,
    origem: 4,
    ingrediente: 3,
    dificuldade: 2,
    descricao: 1,
  };

  function searchRecipes(query, opts) {
    const q = norm(query).trim();
    if (!q) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    const limit = (opts && opts.limit) || Infinity;
    const items = buildIndex();
    const results = [];

    items.forEach(function (item) {
      const recipe = item.recipe;
      const fields = {
        nome: norm(recipe.name),
        categoria: norm(item.catLabel) + " " + norm(recipe.subgroup),
        origem: norm(recipe.origin),
        ingrediente: norm((recipe.ingredients || []).join(" ")),
        dificuldade: norm(recipe.difficulty),
        descricao: norm(recipe.desc),
      };

      let score = 0;
      const matchedFields = new Set();

      terms.forEach(function (term) {
        Object.keys(fields).forEach(function (fieldName) {
          if (fields[fieldName].indexOf(term) !== -1) {
            score += WEIGHTS[fieldName];
            matchedFields.add(fieldName);
          }
        });
      });

      // Bônus se o nome começa exatamente com o termo (relevância extra)
      if (fields.nome.indexOf(q) === 0) score += 6;

      if (score > 0) {
        results.push({
          catId: item.catId,
          catLabel: item.catLabel,
          recipe: recipe,
          score: score,
          matchedFields: Array.from(matchedFields),
        });
      }
    });

    results.sort(function (a, b) {
      return b.score - a.score;
    });

    return results.slice(0, limit);
  }

  window.Search = { searchRecipes: searchRecipes };
})();
