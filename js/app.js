(function () {
  const header = document.getElementById("category-header");
  const content = document.getElementById("recipes-content");
  const progressEl = document.getElementById("progress");

  const firstCollection = window.COLLECTIONS[0];
  let activeCat = null; // id da coleção atual; null quando estamos na home, busca global ou telas de lista

  // ---------- Ícones outline (Bloco 2 — barra inferior + tiles novos da home) ----------
  // Único monocromático: stroke=currentColor, cor real vem do CSS (--color-accent /
  // --color-text-disabled / --color-text-primary), nunca fixa no path.
  const ICON_SVG_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const ICONS = {
    home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.5-4.5"/>',
    bookmark: '<path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1Z"/>',
    pan: '<circle cx="10" cy="13" r="7"/><path d="M17 12h5"/>',
    cart: '<path d="M4 6h2l2 11h10l2-8H7"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="16.5" cy="20" r="1.3"/>',
    bowl: '<path d="M4 12a8 8 0 0 0 16 0"/><path d="M4 12h16"/><path d="M8 8c1 1 1 2 0 3"/><path d="M12 7c1 1 1 2 0 3"/><path d="M16 8c1 1 1 2 0 3"/>',
    flame: '<path d="M12 3c2 3 4 5 4 8a4 4 0 1 1-8 0c0-1 .3-2 1-3 .2 1.5 1 2 1.8 2A2 2 0 0 0 13 8c0-2-2-3-1-5Z"/>',
    globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><path d="M12 4c2.5 2.5 2.5 13 0 16"/><path d="M12 4c-2.5 2.5-2.5 13 0 16"/>',
    cupcake: '<path d="M7 11h10l-1.2 7.5A2 2 0 0 1 13.8 20h-3.6a2 2 0 0 1-2-1.5L7 11Z"/><path d="M6 11a6 4 0 0 1 12 0Z"/><path d="M12 3v2.2"/>',
    dots: '<circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/>',
  };
  function iconSvg(key, className) {
    return '<svg class="' + className + '" ' + ICON_SVG_ATTRS + ">" + ICONS[key] + "</svg>";
  }

  // ---------- Barra de navegação inferior (fixa, 5 abas) ----------
  const BOTTOM_NAV_TABS = [
    { id: "home", label: "Home", icon: "home", go: () => Router.toHome() },
    { id: "pesquisar", label: "Pesquisar", icon: "search", go: () => Router.toBusca([], []) },
    { id: "minhas-receitas", label: "Minhas Receitas", icon: "bookmark", go: () => Router.toMinhasReceitas() },
    { id: "preparos", label: "Preparos", icon: "pan", go: () => Router.toPreparos() },
    { id: "lista-compras", label: "Lista de Compras", icon: "cart", go: () => Router.toListaCompras() },
  ];
  const bottomNavEl = document.getElementById("bottom-nav");
  function renderBottomNav() {
    if (!bottomNavEl) return;
    bottomNavEl.innerHTML = BOTTOM_NAV_TABS.map(
      (tab) =>
        '<button type="button" class="bottom-nav__tab" data-route="' +
        tab.id +
        '" aria-label="' +
        tab.label +
        '">' +
        iconSvg(tab.icon, "bottom-nav__icon") +
        '<span class="bottom-nav__label">' + tab.label + "</span></button>"
    ).join("");
    Array.prototype.forEach.call(bottomNavEl.querySelectorAll(".bottom-nav__tab"), (btn, i) => {
      btn.addEventListener("click", () => BOTTOM_NAV_TABS[i].go());
    });
  }
  // route.name -> id da aba correspondente (rotas sem aba própria, ex. categoria/receita, não ativam nenhuma).
  const ROUTE_TO_BOTTOM_NAV_TAB = {
    home: "home",
    busca: "pesquisar",
    "minhas-receitas": "minhas-receitas",
    preparos: "preparos",
    "lista-compras": "lista-compras",
  };
  function updateBottomNav(route) {
    if (!bottomNavEl) return;
    const activeTab = ROUTE_TO_BOTTOM_NAV_TAB[route.name] || null;
    Array.prototype.forEach.call(bottomNavEl.querySelectorAll(".bottom-nav__tab"), (btn) => {
      btn.classList.toggle("is-active", btn.dataset.route === activeTab);
    });
  }

  // ---------- Busca facetada: sugestões (tags + receitas por nome) ----------
  // O texto digitado só gera sugestões — nunca filtra a lista de receitas sozinho.
  // Selecionar uma tag sugerida é que muda o resultado (e a URL).
  let tagSearchDebounce = null;
  function wireTagSearchInput(inputEl, suggestionsEl, handlers) {
    inputEl.addEventListener("input", () => {
      const q = inputEl.value;
      clearTimeout(tagSearchDebounce);
      tagSearchDebounce = setTimeout(() => renderTagSuggestions(q, suggestionsEl, handlers), 220);
    });
    // Enter escolhe a melhor sugestão sem precisar tocar na lista — útil pra tecla
    // "Ir"/"Buscar" do teclado virtual no mobile. Ordem: tag formal (só se já tiver
    // receita de verdade, nunca uma tag "morta") > filtro de texto combinável > receita direta.
    inputEl.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      const q = inputEl.value.trim();
      if (!q) return;
      const excludeTagIds = (handlers && handlers.excludeTagIds) || [];

      const tagCandidates = Search.searchTags(q).filter((t) => excludeTagIds.indexOf(t.id) === -1);
      const liveTag = tagCandidates.find((t) => TagModel.getRecipesByTags(excludeTagIds.concat([t.id])).length > 0);
      if (liveTag) {
        inputEl.value = "";
        suggestionsEl.innerHTML = "";
        handlers.onSelectTag(liveTag.id);
        return;
      }

      if (handlers.onSelectText && Search.countByIngredientText(q) > 0) {
        inputEl.value = "";
        suggestionsEl.innerHTML = "";
        handlers.onSelectText(q);
        return;
      }

      const recipeResults = Search.searchRecipes(q, { limit: 1 });
      if (recipeResults.length) {
        inputEl.value = "";
        suggestionsEl.innerHTML = "";
        handlers.onSelectRecipe(recipeResults[0].catId, recipeResults[0].recipe.name);
      }
    });
  }

  function renderTagSuggestions(query, suggestionsEl, handlers) {
    const q = query.trim();
    if (!q) {
      suggestionsEl.innerHTML = "";
      return;
    }
    const excludeTagIds = (handlers && handlers.excludeTagIds) || [];
    const tagResults = Search.searchTags(q).filter((t) => excludeTagIds.indexOf(t.id) === -1).slice(0, 6);
    const recipeResults = Search.searchRecipes(q, { limit: 5 });
    // Filtro de texto combinável: só oferecido quando o termo não bateu em nenhuma tag formal
    // (senão a tag já resolve melhor) e o caller aceita esse tipo de sugestão (busca facetada).
    const textFacetCount = handlers && handlers.onSelectText && !tagResults.length ? Search.countByIngredientText(q) : 0;

    if (!tagResults.length && !recipeResults.length && !textFacetCount) {
      suggestionsEl.innerHTML = '<div class="tagsearch-empty">Nenhuma tag ou prato encontrado para "' + query + '".</div>';
      return;
    }

    let html = "";
    if (tagResults.length) {
      html +=
        '<div class="tagsearch-group-label">Tags</div><div class="tagsearch-taglist">' +
        tagResults.map((t) => '<button type="button" class="tag-suggestion" data-tag="' + t.id + '">' + t.label + "</button>").join("") +
        "</div>";
    }
    if (textFacetCount > 0) {
      html +=
        '<div class="tagsearch-group-label">Filtro de texto</div><div class="tagsearch-taglist">' +
        '<button type="button" class="text-suggestion" data-text="' +
        encodeURIComponent(q) +
        '">Contém "' +
        q +
        '" nos ingredientes (' +
        textFacetCount +
        ")</button></div>";
    }
    if (recipeResults.length) {
      html +=
        '<div class="tagsearch-group-label">Receitas</div><div class="tagsearch-recipelist">' +
        recipeResults
          .map((r) => '<button type="button" class="recipe-suggestion" data-cat="' + r.catId + '" data-name="' + encodeURIComponent(r.recipe.name) + '">' + r.recipe.name + "</button>")
          .join("") +
        "</div>";
    }
    suggestionsEl.innerHTML = html;

    suggestionsEl.querySelectorAll(".tag-suggestion").forEach((btn) => {
      btn.addEventListener("click", () => handlers.onSelectTag(btn.dataset.tag));
    });
    suggestionsEl.querySelectorAll(".recipe-suggestion").forEach((btn) => {
      btn.addEventListener("click", () => handlers.onSelectRecipe(btn.dataset.cat, decodeURIComponent(btn.dataset.name)));
    });
    suggestionsEl.querySelectorAll(".text-suggestion").forEach((btn) => {
      btn.addEventListener("click", () => handlers.onSelectText(decodeURIComponent(btn.dataset.text)));
    });
  }

  function goToRecipeByCatAndName(catId, name) {
    const id = TagModel.getIdForCatAndName(catId, name);
    if (id) Router.toReceita(id);
  }

  // ---------- Chips de tags clicáveis (cards e página da receita) ----------
  // time:/difficulty: ficam de fora — já aparecem como texto simples no meta row, mostrar de novo seria redundante.
  const TAG_CHIP_PRIORITY = ["country:", "dish_type:", "protein:", "course:", "ingredient:"];
  function priorityTagIds(tags, maxCount) {
    const ordered = [];
    TAG_CHIP_PRIORITY.forEach((prefix) => {
      tags.forEach((t) => {
        if (t.indexOf(prefix) === 0 && ordered.indexOf(t) === -1) ordered.push(t);
      });
    });
    return ordered.slice(0, maxCount);
  }

  function buildTagChipsEl(tagIds, className) {
    const wrap = document.createElement("div");
    wrap.className = className;
    tagIds.forEach((tagId) => {
      const tag = TagModel.getTagById(tagId);
      if (!tag) return;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tag-chip-link";
      chip.textContent = tag.label;
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        Router.toBusca([tagId]);
      });
      wrap.appendChild(chip);
    });
    return wrap;
  }

  // ---------- Grupos macro (home -> página de grupo -> coleção -> receita) ----------
  const GRUPOS = [
    { id: "fundamentos", label: "Fundamentos", icon: "🥣", desc: "Aprenda as bases, técnicas e preparos essenciais da culinária.", collectionGroup: "Fundamentos" },
    { id: "proteinas", label: "Proteínas", icon: "🍗", desc: "Encontre receitas pelo tipo de proteína principal ou ingrediente usado.", collectionGroup: "Proteínas" },
    { id: "cozinhas", label: "Cozinhas do mundo", icon: "🌍", desc: "Navegue por receitas do Brasil e de diferentes países.", collectionGroup: "Cozinhas do Mundo" },
    { id: "tempo", label: "Por tempo", icon: "⏱️", desc: "Escolha receitas de acordo com o tempo que você tem para cozinhar.", collectionGroup: "Por tempo" },
    { id: "dificuldade", label: "Por dificuldade", icon: "🎯", desc: "Encontre receitas fáceis, intermediárias ou mais técnicas.", collectionGroup: "Por dificuldade" },
  ];

  function normText(s) {
    return (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // Mapa catId -> grupo, derivado de window.COLLECTIONS (fonte atual, a mesma usada pelo botão
  // voltar via "collection.group === grupo.collectionGroup") — NUNCA de window.CATEGORIES,
  // cujo campo .group ficou desatualizado (ex: ainda marca "arrozes" como Proteínas e mantém
  // "Brasil" como grupo próprio, quando collections.js já moveu isso pra Fundamentos/Cozinhas
  // do Mundo). Só as coleções de "paridade de categoria" (id === id da categoria) entram aqui;
  // coleções sintéticas cruzadas (col-ovo, col-vegetariana, col-rapidas etc.) não representam
  // o "lar" de nenhuma receita, então ficam de fora de propósito.
  let catIdToGroupCache = null;
  function getCatIdToGroup() {
    if (catIdToGroupCache) return catIdToGroupCache;
    const map = {};
    window.COLLECTIONS.forEach((c) => {
      if (window.CATEGORIES.some((cat) => cat.id === c.id)) map[c.id] = c.group;
    });
    // brasileiros/brasil-regional foram fundidos na coleção "brasil" (sem coleção própria mais)
    const brasilCollection = window.COLLECTIONS.find((c) => c.id === "brasil");
    if (brasilCollection) {
      map["brasileiros"] = brasilCollection.group;
      map["brasil-regional"] = brasilCollection.group;
    }
    // contemporaneos/tecnicas-contemporaneas-2 foram fundidos na coleção "tecnicas"
    const tecnicasCollection = window.COLLECTIONS.find((c) => c.id === "tecnicas");
    if (tecnicasCollection) {
      map["contemporaneos"] = tecnicasCollection.group;
      map["tecnicas-contemporaneas-2"] = tecnicasCollection.group;
    }
    // risotos/arrozes foram fundidos na coleção "risotos-arroz"
    const risotosArrozCollection = window.COLLECTIONS.find((c) => c.id === "risotos-arroz");
    if (risotosArrozCollection) {
      map["risotos"] = risotosArrozCollection.group;
      map["arrozes"] = risotosArrozCollection.group;
    }
    // entradas-frias/entradas-quentes foram fundidas na coleção "entradas"
    const entradasCollection = window.COLLECTIONS.find((c) => c.id === "entradas");
    if (entradasCollection) {
      map["entradas-frias"] = entradasCollection.group;
      map["entradas-quentes"] = entradasCollection.group;
    }
    // ovos-basicos/ovos-classicos não têm mais coleção própria em Fundamentos — já satisfazem
    // protein:ovo e vivem em "Ovos" (col-ovo, Proteínas); sem este fallback a busca do hub
    // escoparia essas receitas como Fundamentos (por catId) enquanto a navegação já as trata
    // como Proteínas (por tag), os dois mecanismos discordando.
    const ovoCollection = window.COLLECTIONS.find((c) => c.id === "col-ovo");
    if (ovoCollection) {
      map["ovos-basicos"] = ovoCollection.group;
      map["ovos-classicos"] = ovoCollection.group;
    }
    catIdToGroupCache = map;
    return map;
  }

  function renderCollectionCard(collection) {
    const { primaryRecipes, allRecipes } = TagModel.getRecipesByCollection(collection.id);
    const doneCount = Storage.countMade(allRecipes.map((i) => i.id));
    const pct = allRecipes.length ? Math.round((doneCount / allRecipes.length) * 100) : 0;
    const countLabel =
      allRecipes.length !== primaryRecipes.length
        ? primaryRecipes.length + " de foco · " + allRecipes.length + " no total"
        : allRecipes.length + " receitas";
    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML =
      '<span class="category-card__icon">' + (collection.icon || "🍽") + "</span>" +
      '<span class="category-card__title">' + collection.label + "</span>" +
      '<span class="category-card__count">' + countLabel + "</span>" +
      (allRecipes.length
        ? '<span class="category-card__progress"><span class="category-card__progress-bar" style="width:' +
          pct +
          '%"></span></span><span class="category-card__progress-label">' +
          doneCount +
          "/" +
          allRecipes.length +
          " feitas</span>"
        : "");
    card.addEventListener("click", () => Router.toCategoria(collection.id));
    return card;
  }

  // Busca contextual: só considera as coleções do próprio grupo (label da coleção
  // ou label/sinônimos das tags que ela filtra) — nunca busca receitas diretamente.
  function renderGrupo(grupoId) {
    const grupo = GRUPOS.find((g) => g.id === grupoId);
    if (!grupo) {
      renderHome();
      return;
    }
    activeCat = null;
    refreshActiveCounts = null;

    header.innerHTML = "";
    content.innerHTML = "";
    progressEl.textContent = "";

    const wrap = document.createElement("div");
    wrap.className = "grupo-view";

    const back = document.createElement("button");
    back.className = "back-button";
    back.textContent = "← Voltar";
    back.addEventListener("click", () => Router.toHome());
    wrap.appendChild(back);

    const titleEl = document.createElement("h2");
    titleEl.textContent = grupo.icon + " " + grupo.label;
    wrap.appendChild(titleEl);

    const descEl = document.createElement("div");
    descEl.className = "desc";
    descEl.textContent = grupo.desc;
    wrap.appendChild(descEl);

    const searchWrap = document.createElement("div");
    searchWrap.className = "home-search-wrap";
    const search = document.createElement("input");
    search.type = "text";
    search.className = "home-search";
    search.placeholder = "Buscar em " + grupo.label.toLowerCase() + "...";
    searchWrap.appendChild(search);
    wrap.appendChild(searchWrap);

    const categoriesLabel = document.createElement("div");
    categoriesLabel.className = "subgroup-title";
    wrap.appendChild(categoriesLabel);

    const grid = document.createElement("div");
    grid.className = "category-grid";
    wrap.appendChild(grid);

    const recipeResultsEl = document.createElement("div");
    recipeResultsEl.className = "grupo-recipe-results";
    wrap.appendChild(recipeResultsEl);

    // hideFromGrupoGrid (Bloco 2): massas/sobremesas-classicas saem do grid de Fundamentos —
    // ficam só acessíveis via tile grande da home — sem afetar .group (busca escopada intacta).
    const collections = window.COLLECTIONS.filter((c) => c.group === grupo.collectionGroup && !c.hideFromGrupoGrid);

    // Receitas cuja CATEGORIA (catId) pertence a este grupo — não um filtro por tag/coleção
    // (isso deixava vazar receita de fora: ex. um bolo de chocolate com ovo na massa tem
    // ingredient:ovo e "vazava" pra dentro da coleção Ovos via relatedFilterTags, mesmo sendo
    // uma receita de Sobremesas). Categoria é a fonte de verdade de escopo aqui.
    const catIdToGroup = getCatIdToGroup();
    const groupRecipes = TagModel.getAllRecipesFlat().filter((item) => catIdToGroup[item.catId] === grupo.collectionGroup);

    function matchesQuery(collection, q) {
      if (!q) return true;
      const nq = normText(q);
      if (normText(collection.label).indexOf(nq) !== -1) return true;
      return (collection.primaryFilterTags || []).some((tagId) => {
        const tag = TagModel.getTagById(tagId);
        if (!tag) return false;
        if (normText(tag.label).indexOf(nq) !== -1) return true;
        return (tag.synonyms || []).some((syn) => normText(syn).indexOf(nq) !== -1);
      });
    }

    function renderGrid(query) {
      grid.innerHTML = "";
      const filtered = collections.filter((c) => matchesQuery(c, query));
      if (!filtered.length) {
        grid.innerHTML = '<div class="empty-state">Nenhuma opção encontrada para "' + query + '".</div>';
        return;
      }
      filtered.forEach((collection) => grid.appendChild(renderCollectionCard(collection)));
    }

    // Além de filtrar as coleções exibidas, se o termo bater numa tag ingredient:/contains:
    // presente em alguma receita deste grupo (reaproveita Search.searchTags — mesmo índice de
    // tags derivadas pelo motor de dicionário canônico em tagmodel.js, sem duplicar matching de
    // texto), mostra essas receitas numa seção própria, separada da lista de coleções.
    function renderRecipeMatches(query) {
      recipeResultsEl.innerHTML = "";
      const q = (query || "").trim();
      if (q.length < 2) return false;
      const matchedTags = Search.searchTags(q).filter((t) => t.id.indexOf("ingredient:") === 0 || t.id.indexOf("contains:") === 0 || t.id.indexOf("seasoning:") === 0);
      if (!matchedTags.length) return false;
      const matchedIds = new Set(matchedTags.map((t) => t.id));
      const items = groupRecipes.filter((item) => item.tags.some((t) => matchedIds.has(t)));
      if (!items.length) return false;

      const title = document.createElement("div");
      title.className = "subgroup-title";
      title.textContent = 'Receitas com "' + q + '"';
      recipeResultsEl.appendChild(title);
      items.forEach((item) => {
        const cat = window.CATEGORIES.find((c) => c.id === item.catId);
        recipeResultsEl.appendChild(renderRecipeCard(item, { catLabel: cat ? cat.label : item.catId }));
      });
      return true;
    }

    search.addEventListener("input", () => {
      const q = search.value.trim();
      renderGrid(q);
      const hasRecipeResults = renderRecipeMatches(q);
      categoriesLabel.textContent = hasRecipeResults ? "Categorias" : "";
    });
    renderGrid("");

    content.appendChild(wrap);
  }

  // ---------- Home ----------
  // Tiles grandes da home (Bloco 2, Fase 2.2) — cada um leva direto pra sua categoria/hub já
  // existente. Busca livre e atalhos de favoritos/quero-fazer/histórico saem daqui e migram pra
  // dentro de "Minhas Receitas" num bloco futuro (conteúdo ainda não implementado).
  const HOME_MAIN_TILES = [
    { id: "massas", label: "Massas", icon: "bowl", go: () => Router.toCategoria("massas") },
    { id: "proteinas", label: "Proteínas", icon: "flame", go: () => Router.toGrupo("proteinas") },
    { id: "cozinhas", label: "Navegar por Países", icon: "globe", go: () => Router.toGrupo("cozinhas") },
    { id: "sobremesas", label: "Sobremesas", icon: "cupcake", go: () => Router.toCategoria("sobremesas-classicas") },
  ];

  function renderHome() {
    activeCat = null;
    refreshActiveCounts = null;

    header.innerHTML = "";
    content.innerHTML = "";
    progressEl.textContent = "";

    const wrap = document.createElement("div");
    wrap.className = "home-view";

    const totalRecipes = TagModel.getAllRecipesFlat().length;
    const totalMade = Storage.getAllMade().length;
    const prog = document.createElement("div");
    prog.className = "home-progress";
    prog.textContent = totalMade + " de " + totalRecipes + " receitas já feitas 🎉";
    wrap.appendChild(prog);

    const moreCategorias = document.createElement("button");
    moreCategorias.type = "button";
    moreCategorias.className = "home-more-categories";
    moreCategorias.innerHTML = iconSvg("dots", "home-more-categories__icon") + "<span>Mais categorias</span>";
    moreCategorias.addEventListener("click", () => Router.toGrupo("fundamentos"));
    wrap.appendChild(moreCategorias);

    const tilesGrid = document.createElement("div");
    tilesGrid.className = "home-tiles";
    HOME_MAIN_TILES.forEach((tile) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "home-tile";
      card.innerHTML = iconSvg(tile.icon, "home-tile__icon") + '<span class="home-tile__label">' + tile.label + "</span>";
      card.addEventListener("click", tile.go);
      tilesGrid.appendChild(card);
    });
    wrap.appendChild(tilesGrid);

    content.appendChild(wrap);
  }

  // ---------- Barra de facetas (dropdowns) — compartilhada por renderCategory e renderBusca ----------
  // Substitui o refino em funil (chips sequenciais). Cada dropdown lista só os valores
  // presentes no universo ATUAL já filtrado pelas OUTRAS facetas ativas (não pela própria,
  // senão o dropdown nunca mostraria alternativa à opção já escolhida), com contagem.
  // Nada vem pré-selecionado (default = Todos/Tanto faz). Ingrediente é multi-seleção (OR
  // entre os ingredientes escolhidos); os demais continuam de seleção única.
  const GENERIC_FACET_DEFS = [
    { key: "country", label: "País", prefix: "country:" },
    { key: "difficulty", label: "Complexidade", prefix: "difficulty:" },
    { key: "time", label: "Tempo", prefix: "time:" },
    { key: "equipment", label: "Equipamento", prefix: "equipment:" },
    { key: "ingredient", label: "Ingrediente", prefix: "ingredient:", multi: true },
  ];

  // Regra geral de combinação: tags do MESMO prefixo (ex: dois ingredient:*) casam em OR
  // entre si; prefixos DIFERENTES combinam em AND. Pra facetas de seleção única isso se
  // comporta exatamente como um AND simples (só há uma tag por grupo).
  // ingredientMode: "and" (default) exige TODOS os ingredientes selecionados (é um filtro de
  // "quais ingredientes eu tenho em casa", não "qualquer um destes me serve") — "or" é usado
  // só pela rede de segurança quando o AND dá zero resultado (ver renderList/renderResults).
  function matchesGroupedTags(itemTags, tagIds, ingredientMode) {
    if (!tagIds.length) return true;
    const groups = {};
    tagIds.forEach((id) => {
      const prefix = id.slice(0, id.indexOf(":") + 1);
      (groups[prefix] = groups[prefix] || []).push(id);
    });
    return Object.keys(groups).every((prefix) => {
      if ((prefix === "ingredient:" || prefix === "seasoning:") && ingredientMode !== "or") {
        return groups[prefix].every((id) => itemTags.indexOf(id) !== -1);
      }
      return groups[prefix].some((id) => itemTags.indexOf(id) !== -1);
    });
  }

  // A rede de segurança OR só ajuda quando 2+ tags do MESMO grupo (ingredient: OU seasoning:)
  // estão selecionadas — combinar 1 ingredient: + 1 seasoning: é sempre AND entre grupos
  // diferentes (ver matchesGroupedTags), então relaxar pra "or" nesse caso não muda nada e só
  // deixaria o botão de fallback como um beco sem saída.
  function hasIngredientLikeMultiSelect(tagIds) {
    const ingCount = tagIds.filter((t) => t.indexOf("ingredient:") === 0).length;
    const seaCount = tagIds.filter((t) => t.indexOf("seasoning:") === 0).length;
    return ingCount >= 2 || seaCount >= 2;
  }

  // Lê o estado dos dropdowns a partir de um array plano de tag ids (selectedFacetTags ou
  // tagIds) — facetas multi viram array, as demais pegam o primeiro tag do seu prefixo.
  function readFacetStateFromTags(tagIds, defs) {
    const state = {};
    defs.forEach((def) => {
      if (def.multi) {
        state[def.key] = tagIds.filter((t) => t.indexOf(def.prefix) === 0);
      } else {
        state[def.key] = tagIds.find((t) => t.indexOf(def.prefix) === 0) || null;
      }
    });
    return state;
  }

  // Caminho inverso — usado pra reconstruir o array plano depois que o usuário troca uma faceta.
  function facetStateToTagIds(facetState, defs) {
    const out = [];
    defs.forEach((def) => {
      if (def.multi) out.push.apply(out, facetState[def.key] || []);
      else if (facetState[def.key]) out.push(facetState[def.key]);
    });
    return out;
  }

  function facetOptionsFromPrefix(items, prefix) {
    const counts = {};
    items.forEach((item) => {
      item.tags.forEach((tagId) => {
        if (tagId.indexOf(prefix) !== 0) return;
        const tag = TagModel.getTagById(tagId);
        // alho/cebola (lowPriority): fora do dropdown em destaque, continuam buscáveis por texto.
        if (!tag || tag.lowPriority) return;
        counts[tagId] = (counts[tagId] || 0) + 1;
      });
    });
    return Object.keys(counts)
      .map((tagId) => ({ tagId: tagId, tag: TagModel.getTagById(tagId), count: counts[tagId] }))
      .sort((a, b) => b.count - a.count);
  }

  function facetOptionsFromStatic(items, staticOptions) {
    return staticOptions
      .map((opt) => {
        const count = items.filter((item) => item.tags.indexOf(opt.tagId) !== -1).length;
        return { tagId: opt.tagId, tag: { label: opt.label }, count: count };
      })
      .filter((o) => o.count > 0);
  }

  // universeItems: itens ANTES de qualquer faceta ser aplicada (ex: já filtrado por
  // aba/coleção base, mas não pelas facetas do dropdown).
  // facetState: objeto { [key]: tagId|null, ou tagId[] pras facetas multi } — mutado in-place.
  // onChange(): recalcula resultado + re-renderiza (chamado depois do estado mudar).
  function renderFacetBar(barEl, universeItems, facetState, defs, onChange) {
    barEl.innerHTML = "";
    let hasAnyOptions = false;
    defs.forEach((def) => {
      const otherTagIds = [];
      defs.forEach((d) => {
        if (d.key === def.key) return;
        if (d.multi) otherTagIds.push.apply(otherTagIds, facetState[d.key] || []);
        else if (facetState[d.key]) otherTagIds.push(facetState[d.key]);
      });
      const restricted = universeItems.filter((item) => matchesGroupedTags(item.tags, otherTagIds));
      const options = def.prefix ? facetOptionsFromPrefix(restricted, def.prefix) : facetOptionsFromStatic(restricted, def.staticOptions);

      const wrap = document.createElement("div");
      wrap.className = "facet-control";

      if (def.multi) {
        const selectedIds = facetState[def.key] || [];
        const addableOptions = options.filter((o) => selectedIds.indexOf(o.tagId) === -1);
        if (!addableOptions.length && !selectedIds.length) return; // nada pra mostrar nesse dropdown
        hasAnyOptions = true;
        const chipsHtml = selectedIds
          .map((tagId) => {
            const tag = TagModel.getTagById(tagId);
            return (
              '<button type="button" class="tag-chip tag-chip--selected" data-remove="' +
              tagId +
              '">' +
              (tag ? tag.label : tagId) +
              ' <span aria-hidden="true">×</span></button>'
            );
          })
          .join("");
        wrap.innerHTML =
          "<span>" +
          def.label +
          "</span>" +
          (chipsHtml ? '<div class="facet-multi-chips">' + chipsHtml + "</div>" : "") +
          '<select><option value="">+ Adicionar ' +
          def.label.toLowerCase() +
          "</option>" +
          addableOptions.map((o) => '<option value="' + o.tagId + '">' + o.tag.label + " (" + o.count + ")</option>").join("") +
          "</select>";
        wrap.querySelectorAll("[data-remove]").forEach((btn) => {
          btn.addEventListener("click", () => {
            facetState[def.key] = selectedIds.filter((id) => id !== btn.dataset.remove);
            onChange();
          });
        });
        const select = wrap.querySelector("select");
        select.addEventListener("change", () => {
          if (!select.value) return;
          facetState[def.key] = selectedIds.concat([select.value]);
          onChange();
        });
      } else {
        if (!options.length && !facetState[def.key]) return; // nada pra mostrar nesse dropdown
        hasAnyOptions = true;
        const currentVal = facetState[def.key] || "";
        wrap.innerHTML =
          "<span>" +
          def.label +
          '</span><select><option value="">' +
          (def.allLabel || "Todos") +
          "</option>" +
          options
            .map((o) => '<option value="' + o.tagId + '"' + (o.tagId === currentVal ? " selected" : "") + ">" + o.tag.label + " (" + o.count + ")</option>")
            .join("") +
          "</select>";
        const select = wrap.querySelector("select");
        select.value = currentVal;
        select.addEventListener("change", () => {
          facetState[def.key] = select.value || null;
          onChange();
        });
      }
      barEl.appendChild(wrap);
    });
    if (!hasAnyOptions) barEl.innerHTML = "";
  }

  // ---------- Categoria (coleção) ----------
  let refreshActiveCounts = null; // atualiza contadores/toolbar sem re-renderizar os cards (chamado ao marcar feito/favorito)

  function showCategoria(collectionId, initialFacetTags, initialRole) {
    const collection = window.COLLECTIONS.find((c) => c.id === collectionId) || firstCollection;
    activeCat = collection.id;
    renderCategory(collection, initialFacetTags || [], initialRole || null);
  }

  function renderCategory(collection, initialFacetTags, initialRole) {
    refreshActiveCounts = null;
    header.innerHTML =
      '<button type="button" class="back-button">← Voltar</button><h2>' +
      collection.label +
      "</h2>" +
      (collection.desc ? '<div class="desc">' + collection.desc + "</div>" : "");
    const grupo = GRUPOS.find((g) => g.collectionGroup === collection.group);
    header.querySelector(".back-button").addEventListener("click", () => {
      if (grupo) Router.toGrupo(grupo.id);
      else Router.toHome();
    });
    content.innerHTML = "";
    progressEl.textContent = "";

    const { primaryRecipes: basePrimary, relatedRecipes: baseRelated, allRecipes: baseAll } = TagModel.getRecipesByCollection(collection.id);

    if (!baseAll.length) {
      content.innerHTML = '<div class="empty-state">Essa coleção ainda não tem receitas — em breve. 🍳</div>';
      return;
    }

    // Facetas extras selecionadas dentro da coleção (refino in-context, nunca navega pra
    // #/busca) — persistidas na própria URL via Router.replaceCategoriaFacets.
    let selectedFacetTags = (initialFacetTags || []).slice();
    let primaryRecipes = basePrimary;
    let relatedRecipes = baseRelated;
    let allRecipes = baseAll;
    // Rede de segurança: quando 2+ ingredientes selecionados dão zero receita (AND vazio), o
    // usuário pode pedir "ver com qualquer um" — troca só a LISTAGEM pra OR, sem afetar as
    // contagens dos dropdowns (que continuam refletindo o AND, o comportamento padrão).
    let ingredientOrFallback = false;

    function applyFacets() {
      const matchesFacets = (item) => matchesGroupedTags(item.tags, selectedFacetTags);
      primaryRecipes = selectedFacetTags.length ? basePrimary.filter(matchesFacets) : basePrimary;
      relatedRecipes = selectedFacetTags.length ? baseRelated.filter(matchesFacets) : baseRelated;
      allRecipes = selectedFacetTags.length ? baseAll.filter(matchesFacets) : baseAll;
    }
    applyFacets();

    function itemsWithMode(mode) {
      const matches = (item) => matchesGroupedTags(item.tags, selectedFacetTags, mode);
      const primary = selectedFacetTags.length ? basePrimary.filter(matches) : basePrimary;
      const related = selectedFacetTags.length ? baseRelated.filter(matches) : baseRelated;
      const all = selectedFacetTags.length ? baseAll.filter(matches) : baseAll;
      if (proteinRole === "focus") return primary;
      if (proteinRole === "secondary") return related;
      return all;
    }

    // Papel da proteína (Principal/Secundário/Tanto faz) substitui as antigas abas
    // "Foco da receita/Todas" — só existe pra coleções de proteína que realmente têm
    // receitas "também leva" (senão não há o que escolher).
    const isProteinRole = collection.collectionType === "protein" && baseRelated.length > 0;
    let proteinRole = isProteinRole && (initialRole === "focus" || initialRole === "secondary") ? initialRole : null;

    function syncUrl() {
      Router.replaceCategoriaFacets(collection.id, selectedFacetTags, proteinRole);
    }

    let sortKey = TagModel.getCollectionSort(collection.id) || "relevance";

    const toolbar = document.createElement("div");
    toolbar.className = "collection-toolbar";

    const countEl = document.createElement("div");
    countEl.className = "collection-count";
    toolbar.appendChild(countEl);

    const sortWrap = document.createElement("label");
    sortWrap.className = "sort-control";
    sortWrap.innerHTML =
      "<span>Ordenar por</span><select>" +
      TagModel.SORT_OPTIONS.map((o) => '<option value="' + o.key + '">' + o.label + "</option>").join("") +
      "</select>";
    toolbar.appendChild(sortWrap);
    const sortSelect = sortWrap.querySelector("select");
    sortSelect.value = sortKey;
    content.appendChild(toolbar);

    const facetBarEl = document.createElement("div");
    facetBarEl.className = "facet-bar";
    content.appendChild(facetBarEl);

    const clearFiltersEl = document.createElement("div");
    clearFiltersEl.className = "clear-filters-wrap";
    content.appendChild(clearFiltersEl);

    const listEl = document.createElement("div");
    content.appendChild(listEl);

    function currentItems() {
      if (proteinRole === "focus") return primaryRecipes;
      if (proteinRole === "secondary") return relatedRecipes;
      return allRecipes;
    }

    function renderToolbarState() {
      countEl.innerHTML = "<strong>" + currentItems().length + " receita" + (currentItems().length === 1 ? "" : "s") + "</strong>";
      const doneCount = Storage.countMade(currentItems().map((i) => i.id));
      progressEl.textContent = doneCount + " de " + currentItems().length + " já feitas ✓";
    }

    // Só aparece quando há pelo menos 1 faceta ativa (nunca polui a view default). Reseta pro
    // mesmo estado que cada dropdown já reseta individualmente (facetState vazio, proteinRole
    // null) — reaproveita o mesmo pipeline applyFacets/syncUrl/renderFacets/renderList que o
    // onChange de qualquer dropdown já dispara, não é um mecanismo novo.
    function renderClearFilters() {
      const active = selectedFacetTags.length > 0 || proteinRole !== null;
      if (!active) {
        clearFiltersEl.innerHTML = "";
        return;
      }
      clearFiltersEl.innerHTML = '<button type="button" class="btn-clear-filters">Limpar filtros</button>';
      clearFiltersEl.querySelector(".btn-clear-filters").addEventListener("click", () => {
        selectedFacetTags = [];
        proteinRole = null;
        ingredientOrFallback = false;
        applyFacets();
        syncUrl();
        renderFacets();
        renderToolbarState();
        renderClearFilters();
        renderList();
      });
    }

    function renderProteinRoleControl() {
      if (!isProteinRole) return;
      const matchesGeneric = (item) => matchesGroupedTags(item.tags, selectedFacetTags);
      const focusCount = basePrimary.filter(matchesGeneric).length;
      const secondaryCount = baseRelated.filter(matchesGeneric).length;

      const wrap = document.createElement("label");
      wrap.className = "facet-control";
      wrap.innerHTML =
        "<span>Papel da proteína</span><select>" +
        '<option value="">Tanto faz</option>' +
        '<option value="focus">Principal (' +
        focusCount +
        ')</option><option value="secondary">Secundário (' +
        secondaryCount +
        ")</option></select>";
      const select = wrap.querySelector("select");
      select.value = proteinRole || "";
      select.addEventListener("change", () => {
        proteinRole = select.value || null;
        ingredientOrFallback = false;
        syncUrl();
        renderToolbarState();
        renderFacets();
        renderClearFilters();
        renderList();
      });
      facetBarEl.appendChild(wrap);
    }

    function renderFacets() {
      const facetState = readFacetStateFromTags(selectedFacetTags, GENERIC_FACET_DEFS);
      const facetUniverse = proteinRole === "focus" ? basePrimary : proteinRole === "secondary" ? baseRelated : baseAll;
      renderFacetBar(facetBarEl, facetUniverse, facetState, GENERIC_FACET_DEFS, () => {
        selectedFacetTags = facetStateToTagIds(facetState, GENERIC_FACET_DEFS);
        ingredientOrFallback = false;
        applyFacets();
        syncUrl();
        renderFacets();
        renderToolbarState();
        renderClearFilters();
        renderList();
      });
      renderProteinRoleControl();
    }

    function renderList() {
      listEl.innerHTML = "";
      let items = currentItems();
      let usingOrFallback = false;

      if (!items.length) {
        const canFallbackToOr = hasIngredientLikeMultiSelect(selectedFacetTags);
        if (canFallbackToOr && !ingredientOrFallback) {
          listEl.innerHTML =
            '<div class="empty-state">Nenhuma receita tem todos estes ingredientes juntos.<br>' +
            '<button type="button" class="btn-or-fallback">Ver receitas com qualquer um destes ingredientes</button></div>';
          listEl.querySelector(".btn-or-fallback").addEventListener("click", () => {
            ingredientOrFallback = true;
            renderList();
          });
          return;
        }
        if (canFallbackToOr && ingredientOrFallback) {
          items = itemsWithMode("or");
          usingOrFallback = items.length > 0;
        }
        if (!items.length) {
          listEl.innerHTML = '<div class="empty-state">Nenhuma receita com esses filtros.<br>Remova um filtro pra ampliar os resultados.</div>';
          return;
        }
      }

      if (usingOrFallback) {
        const notice = document.createElement("div");
        notice.className = "or-fallback-notice";
        notice.textContent = "Mostrando receitas com qualquer um dos ingredientes selecionados (não todos ao mesmo tempo).";
        listEl.appendChild(notice);
        // o contador do topo reflete o AND por padrão — nesse modo especial, atualiza pra
        // não mostrar "0 receitas" enquanto a lista abaixo tem itens de verdade.
        countEl.innerHTML = "<strong>" + items.length + " receita" + (items.length === 1 ? "" : "s") + " (qualquer ingrediente)</strong>";
        progressEl.textContent = Storage.countMade(items.map((i) => i.id)) + " de " + items.length + " já feitas ✓";
      }

      const sortedItems = TagModel.sortRecipeItems(items, sortKey, collection);

      // "Papel da proteína" (dropdown) já é a única fonte pra distinguir Principal/Secundário —
      // não duplicar essa distinção aqui com cabeçalhos automáticos. sortKey "relevance" já
      // ordena principal-primeiro via getCollectionRelevanceScore, então "Tanto faz" (default)
      // renderiza uma lista só, na ordem certa, sem seção "Foco da receita"/"Também leva".
      if (sortKey === "category-az") {
        let lastLabel = null;
        sortedItems.forEach((item) => {
          const label = TagModel.getCategoryLabel(item);
          if (label !== lastLabel) {
            const st = document.createElement("div");
            st.className = "subgroup-title";
            st.textContent = label;
            listEl.appendChild(st);
            lastLabel = label;
          }
          listEl.appendChild(renderRecipeCard(item, { fromCollectionId: collection.id }));
        });
      } else {
        sortedItems.forEach((item) => listEl.appendChild(renderRecipeCard(item, { fromCollectionId: collection.id })));
      }
    }

    sortSelect.addEventListener("change", () => {
      sortKey = sortSelect.value;
      TagModel.setCollectionSort(collection.id, sortKey);
      renderList();
    });

    refreshActiveCounts = renderToolbarState;

    renderToolbarState();
    renderFacets();
    renderClearFilters();
    renderList();
  }

  // ---------- Busca facetada por tags ----------
  const POPULAR_TAG_GROUPS = [
    { label: "Proteínas", ids: ["protein:frango", "protein:boi", "protein:suino", "protein:peixe", "protein:frutos-do-mar", "protein:ovo", "diet:vegetariana"] },
    { label: "Tipos de prato", ids: ["dish_type:massa", "dish_type:sopa", "dish_type:sobremesa", "dish_type:arroz", "dish_type:pao"] },
    { label: "Cozinhas", ids: ["country:italia", "country:brasil", "country:japao", "country:mexico", "country:franca"] },
    { label: "Tempo e dificuldade", ids: ["time:ate-30-min", "difficulty:facil"] },
  ];

  function renderBusca(tagIds, textFilters) {
    textFilters = textFilters || [];
    activeCat = null;
    refreshActiveCounts = null;
    header.innerHTML = '<button type="button" class="back-button">← Voltar</button><h2>🔎 Buscar por tags</h2>';
    header.querySelector(".back-button").addEventListener("click", () => {
      if (history.length > 1) history.back();
      else Router.toHome();
    });
    content.innerHTML = "";
    progressEl.textContent = "";

    const wrap = document.createElement("div");
    wrap.className = "tagsearch";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "tagsearch-input";
    input.placeholder = "Buscar por ingrediente, país, proteína ou nome do prato...";
    wrap.appendChild(input);

    const suggestionsEl = document.createElement("div");
    suggestionsEl.className = "tagsearch-suggestions";
    wrap.appendChild(suggestionsEl);

    const chipsEl = document.createElement("div");
    chipsEl.className = "tagsearch-chips";
    wrap.appendChild(chipsEl);

    const textChipsEl = document.createElement("div");
    textChipsEl.className = "tagsearch-chips";
    wrap.appendChild(textChipsEl);

    const facetBarEl = document.createElement("div");
    facetBarEl.className = "facet-bar";
    wrap.appendChild(facetBarEl);

    const countRow = document.createElement("div");
    countRow.className = "tagsearch-count-row";
    const countEl = document.createElement("div");
    countEl.className = "tagsearch-count";
    countRow.appendChild(countEl);
    const sortWrap = document.createElement("label");
    sortWrap.className = "sort-control";
    sortWrap.innerHTML =
      "<span>Ordenar por</span><select>" +
      TagModel.SORT_OPTIONS.map((o) => '<option value="' + o.key + '">' + o.label + "</option>").join("") +
      "</select>";
    countRow.appendChild(sortWrap);
    const sortSelect = sortWrap.querySelector("select");
    let sortKey = "recipe-az";
    sortSelect.value = sortKey;
    // Rede de segurança: 2+ ingredientes selecionados dando zero receita (AND vazio) oferece
    // "ver com qualquer um" — troca só a LISTAGEM pra OR, sem afetar as contagens dos dropdowns.
    let ingredientOrFallback = false;
    wrap.appendChild(countRow);

    content.appendChild(wrap);

    const resultsEl = document.createElement("div");
    resultsEl.className = "tagsearch-results";
    content.appendChild(resultsEl);

    function goTo(newTagIds, newTextFilters) {
      const dedupedTags = newTagIds.filter((id, i) => newTagIds.indexOf(id) === i);
      const dedupedText = (newTextFilters || textFilters).filter((t, i) => (newTextFilters || textFilters).indexOf(t) === i);
      Router.toBusca(dedupedTags, dedupedText);
    }
    function goToTags(newTagIds) {
      goTo(newTagIds, textFilters);
    }

    function renderChips() {
      if (!tagIds.length) {
        chipsEl.innerHTML = "";
        return;
      }
      chipsEl.innerHTML = tagIds
        .map((id) => {
          const tag = TagModel.getTagById(id);
          return (
            '<button type="button" class="tag-chip tag-chip--selected" data-tag="' +
            id +
            '">' +
            (tag ? tag.label : id) +
            ' <span aria-hidden="true">×</span></button>'
          );
        })
        .join("");
      chipsEl.querySelectorAll(".tag-chip").forEach((btn) => {
        btn.addEventListener("click", () => goToTags(tagIds.filter((t) => t !== btn.dataset.tag)));
      });
    }

    function renderTextChips() {
      if (!textFilters.length) {
        textChipsEl.innerHTML = "";
        return;
      }
      textChipsEl.innerHTML = textFilters
        .map(
          (text) =>
            '<button type="button" class="tag-chip tag-chip--selected tag-chip--text" data-text="' +
            encodeURIComponent(text) +
            '">Contém "' +
            text +
            '" <span aria-hidden="true">×</span></button>'
        )
        .join("");
      textChipsEl.querySelectorAll(".tag-chip").forEach((btn) => {
        const text = decodeURIComponent(btn.dataset.text);
        btn.addEventListener("click", () => goTo(tagIds, textFilters.filter((t) => t !== text)));
      });
    }

    // tags controladas pelos dropdowns genéricos (país/complexidade/tempo/ingrediente) —
    // qualquer OUTRA tag em tagIds (de um chip manual/busca por texto) fica de fora e é
    // preservada ao trocar uma faceta.
    function nonFacetTagIds() {
      return tagIds.filter((id) => !GENERIC_FACET_DEFS.some((def) => id.indexOf(def.prefix) === 0));
    }

    function facetUniverse(base, mode) {
      let items = base.length ? TagModel.getAllRecipesFlat().filter((item) => matchesGroupedTags(item.tags, base, mode)) : TagModel.getAllRecipesFlat();
      if (textFilters.length) {
        items = items.filter((item) => {
          const ingredientsText = normText((item.recipe.ingredients || []).join(" "));
          return textFilters.every((t) => ingredientsText.indexOf(normText(t)) !== -1);
        });
      }
      return items;
    }

    function renderFacets() {
      const facetState = readFacetStateFromTags(tagIds, GENERIC_FACET_DEFS);
      const base = nonFacetTagIds();
      renderFacetBar(facetBarEl, facetUniverse(base), facetState, GENERIC_FACET_DEFS, () => {
        goToTags(base.concat(facetStateToTagIds(facetState, GENERIC_FACET_DEFS)));
      });
    }

    function renderPopularTags() {
      const html = POPULAR_TAG_GROUPS.map((group) => {
        const chips = group.ids
          .map((id) => {
            const tag = TagModel.getTagById(id);
            return tag ? '<button type="button" class="tag-suggestion" data-tag="' + id + '">' + tag.label + "</button>" : "";
          })
          .join("");
        return '<div class="tagsearch-group-label">' + group.label + '</div><div class="tagsearch-taglist">' + chips + "</div>";
      }).join("");
      const popularWrap = document.createElement("div");
      popularWrap.className = "tagsearch-popular";
      popularWrap.innerHTML = html;
      resultsEl.appendChild(popularWrap);
      popularWrap.querySelectorAll(".tag-suggestion").forEach((btn) => {
        btn.addEventListener("click", () => goToTags([btn.dataset.tag]));
      });
    }

    function renderResults() {
      resultsEl.innerHTML = "";
      if (!tagIds.length && !textFilters.length) {
        countEl.textContent = "";
        resultsEl.innerHTML = '<div class="empty-state">Escolha uma tag abaixo (ou digite acima) pra começar a buscar.</div>';
        renderPopularTags();
        return;
      }
      let items = facetUniverse(tagIds);
      let usingOrFallback = false;
      if (!items.length) {
        const canFallbackToOr = hasIngredientLikeMultiSelect(tagIds);
        if (canFallbackToOr && !ingredientOrFallback) {
          countEl.textContent = "";
          resultsEl.innerHTML =
            '<div class="empty-state">Nenhuma receita tem todos estes ingredientes juntos.<br>' +
            '<button type="button" class="btn-or-fallback">Ver receitas com qualquer um destes ingredientes</button></div>';
          resultsEl.querySelector(".btn-or-fallback").addEventListener("click", () => {
            ingredientOrFallback = true;
            renderResults();
          });
          return;
        }
        if (canFallbackToOr && ingredientOrFallback) {
          items = facetUniverse(tagIds, "or");
          usingOrFallback = items.length > 0;
        }
        if (!items.length) {
          countEl.textContent = "";
          resultsEl.innerHTML =
            '<div class="empty-state">Nenhuma receita encontrada com esses filtros.<br>Remova um filtro pra ampliar os resultados.</div>';
          return;
        }
      }
      if (usingOrFallback) {
        const notice = document.createElement("div");
        notice.className = "or-fallback-notice";
        notice.textContent = "Mostrando receitas com qualquer um dos ingredientes selecionados (não todos ao mesmo tempo).";
        resultsEl.appendChild(notice);
      }
      countEl.textContent = items.length + (items.length === 1 ? " receita encontrada" : " receitas encontradas");
      const sortedItems = TagModel.sortRecipeItems(items, sortKey, null);
      sortedItems.forEach((item) => {
        const cat = window.CATEGORIES.find((c) => c.id === item.catId);
        resultsEl.appendChild(renderRecipeCard(item, { catLabel: cat ? cat.label : item.catId }));
      });
    }

    sortSelect.addEventListener("change", () => {
      sortKey = sortSelect.value;
      renderResults();
    });

    wireTagSearchInput(input, suggestionsEl, {
      onSelectTag: (tagId) => {
        input.value = "";
        suggestionsEl.innerHTML = "";
        goToTags(tagIds.concat([tagId]));
      },
      onSelectRecipe: goToRecipeByCatAndName,
      onSelectText: (text) => {
        input.value = "";
        suggestionsEl.innerHTML = "";
        goTo(tagIds, textFilters.concat([text]));
      },
      excludeTagIds: tagIds,
    });

    renderChips();
    renderTextChips();
    renderFacets();
    renderResults();
  }

  // ---------- Telas-placeholder da barra inferior (Minhas Receitas / Preparos / Lista de Compras) ----------
  // Só navegação + visual por ora — conteúdo real chega em blocos futuros (ver Bloco 2, Fase 2.1).
  function renderPlaceholder(title, desc) {
    activeCat = null;
    refreshActiveCounts = null;
    header.innerHTML = "<h2>" + title + "</h2>";
    content.innerHTML = "";
    progressEl.textContent = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = desc;
    content.appendChild(empty);
  }

  // ---------- Telas de lista (Favoritos / Quero fazer / Histórico) ----------
  const LIST_VIEWS = {
    favoritos: { title: "★ Favoritos", empty: "Você ainda não marcou nenhum prato como favorito.", getIds: () => Storage.getAllFavorites() },
    "quero-fazer": { title: "🔖 Quero fazer", empty: "Você ainda não adicionou nenhum prato à lista de \"quero fazer\".", getIds: () => Storage.getAllWantToCook() },
    historico: { title: "🕘 Histórico de receitas feitas", empty: "Você ainda não marcou nenhum prato como feito.", getIds: () => Storage.getAllMade() },
  };

  function renderListView(view) {
    const cfg = LIST_VIEWS[view];
    activeCat = null;
    refreshActiveCounts = null;

    header.innerHTML = '<button type="button" class="back-button">← Voltar</button><h2>' + cfg.title + "</h2>";
    header.querySelector(".back-button").addEventListener("click", () => {
      if (history.length > 1) history.back();
      else Router.toHome();
    });
    content.innerHTML = "";
    progressEl.textContent = "";

    const ids = cfg.getIds();
    const items = ids.map((id) => TagModel.findRecipeById(id)).filter(Boolean);

    if (!items.length) {
      content.innerHTML = '<div class="empty-state">' + cfg.empty + "</div>";
      return;
    }

    items.forEach((item) => {
      const cat = window.CATEGORIES.find((c) => c.id === item.catId);
      content.appendChild(renderRecipeCard(item, { catLabel: cat ? cat.label : item.catId }));
    });
  }

  // ---------- Card de receita (usado na lista de categoria e na busca) ----------
  function renderRecipeCard(item, opts) {
    opts = opts || {};
    const recipe = item.recipe;
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.recipeName = recipe.name;

    const isMade = Storage.isMade(item.id);
    if (isMade) card.classList.add("made-card");

    card.addEventListener("click", () => {
      Router.toReceita(item.id, opts.fromCollectionId);
    });

    // ---------- header: thumb | título+origem | ações ----------
    const cardHeader = document.createElement("div");
    cardHeader.className = "recipe-header";

    const thumb = document.createElement("div");
    thumb.className = "recipe-thumb placeholder";
    thumb.textContent = "🍽";
    if (recipe.image) {
      applyImage(thumb, recipe.image);
    } else {
      loadRecipeImage(imageQuery(recipe), thumb);
    }

    const titleBlock = document.createElement("div");
    titleBlock.className = "recipe-title";
    titleBlock.innerHTML =
      "<h3>" + recipe.name + "</h3>" +
      (opts.catLabel ? '<div class="cat-chip">' + opts.catLabel + "</div>" : "") +
      (recipe.origin ? '<div class="origin">' + recipe.origin + "</div>" : "");

    const actions = document.createElement("div");
    actions.className = "recipe-card-actions";

    const toggle = document.createElement("button");
    toggle.className = "made-toggle" + (isMade ? " made" : "");
    toggle.title = "Marcar como já feito";
    toggle.textContent = "✓";
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const nowMade = Storage.toggleMade(item.id);
      toggle.classList.toggle("made", nowMade);
      card.classList.toggle("made-card", nowMade);
      if (refreshActiveCounts) refreshActiveCounts();
    });

    const favToggle = document.createElement("button");
    const isFav = Storage.isFavorite(item.id);
    favToggle.className = "favorite-toggle" + (isFav ? " favorite" : "");
    favToggle.title = "Marcar como favorito";
    favToggle.textContent = "★";
    favToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const nowFav = Storage.toggleFavorite(item.id);
      favToggle.classList.toggle("favorite", nowFav);
    });

    const wantToggle = document.createElement("button");
    const isWant = Storage.isWantToCook(item.id);
    wantToggle.className = "wanttocook-toggle" + (isWant ? " active" : "");
    wantToggle.title = "Quero fazer";
    wantToggle.textContent = "🔖";
    wantToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const now = Storage.toggleWantToCook(item.id);
      wantToggle.classList.toggle("active", now);
    });

    actions.appendChild(toggle);
    actions.appendChild(favToggle);
    actions.appendChild(wantToggle);

    cardHeader.appendChild(thumb);
    cardHeader.appendChild(titleBlock);
    cardHeader.appendChild(actions);
    card.appendChild(cardHeader);

    // ---------- descrição (resumo, 2 linhas) ----------
    if (recipe.desc) {
      const desc = document.createElement("div");
      desc.className = "recipe-card-desc";
      desc.textContent = recipe.desc;
      card.appendChild(desc);
    }

    // ---------- tags (prioritárias + contexto de "relacionada", se houver) ----------
    const cardTagIds = priorityTagIds(item.tags || [], 3);
    if (cardTagIds.length || opts.contextTagId) {
      const tagsWrap = buildTagChipsEl(cardTagIds, "recipe-card-tags");
      if (opts.contextTagId) {
        const contextTag = TagModel.getTagById(opts.contextTagId);
        if (contextTag) {
          const badge = document.createElement("span");
          badge.className = "recipe-card-context";
          badge.textContent = contextTag.label;
          tagsWrap.appendChild(badge);
        }
      }
      card.appendChild(tagsWrap);
    }

    // ---------- meta (tempo, rendimento, dificuldade) em chips ----------
    const meta = document.createElement("div");
    meta.className = "recipe-meta";
    let metaHtml = "";
    if (recipe.time && recipe.time.total) metaHtml += '<span class="recipe-meta-chip">⏱ ' + recipe.time.total + "</span>";
    if (recipe.yield) metaHtml += '<span class="recipe-meta-chip">🍽 ' + recipe.yield + "</span>";
    if (recipe.difficulty) metaHtml += '<span class="recipe-meta-chip">📊 ' + recipe.difficulty + "</span>";
    meta.innerHTML = metaHtml;
    card.appendChild(meta);

    // ---------- CTA ----------
    const cta = document.createElement("div");
    cta.className = "recipe-card-cta";
    cta.innerHTML = "<span>Ver receita</span><span aria-hidden=\"true\">▶</span>";
    card.appendChild(cta);

    return card;
  }

  // ---------- Página própria da receita ----------
  function renderReceita(id, fromCollectionId) {
    const item = TagModel.findRecipeById(id);
    if (!item) {
      renderHome();
      return;
    }
    const recipe = item.recipe;
    const catId = item.catId;
    const cat = window.CATEGORIES.find((c) => c.id === catId);
    const backCollection = fromCollectionId && window.COLLECTIONS.find((c) => c.id === fromCollectionId);

    activeCat = catId;
    refreshActiveCounts = null;

    header.innerHTML = "";
    content.innerHTML = "";
    progressEl.textContent = "";

    const page = document.createElement("div");
    page.className = "recipe-page";

    const back = document.createElement("button");
    back.className = "back-button";
    back.textContent = "← Voltar para " + (backCollection ? backCollection.label : cat ? cat.label : catId);
    back.addEventListener("click", () => Router.toCategoria(backCollection ? backCollection.id : catId));
    page.appendChild(back);

    const hero = document.createElement("div");
    hero.className = "recipe-hero placeholder";
    hero.textContent = "🍽";
    if (recipe.image) {
      applyImage(hero, recipe.image);
    } else {
      loadRecipeImage(imageQuery(recipe), hero);
    }
    page.appendChild(hero);

    const titleBlock = document.createElement("div");
    titleBlock.className = "recipe-page-title";
    titleBlock.innerHTML =
      "<h2>" + recipe.name + "</h2>" +
      (recipe.origin ? '<div class="origin">' + recipe.origin + "</div>" : "") +
      (recipe.desc ? '<p class="page-desc">' + recipe.desc + "</p>" : "");
    page.appendChild(titleBlock);

    const metaRow = document.createElement("div");
    metaRow.className = "recipe-page-meta";
    let metaHtml = "";
    if (recipe.time && recipe.time.total) metaHtml += "<span>⏱ Total: " + recipe.time.total + "</span>";
    if (recipe.time && recipe.time.prep) metaHtml += "<span>🔪 Preparo: " + recipe.time.prep + "</span>";
    if (recipe.time && recipe.time.cook) metaHtml += "<span>🔥 Cozimento: " + recipe.time.cook + "</span>";
    if (recipe.yield) metaHtml += "<span>🍽 " + recipe.yield + "</span>";
    if (recipe.difficulty) metaHtml += "<span>📊 " + recipe.difficulty + "</span>";
    metaRow.innerHTML = metaHtml;
    page.appendChild(metaRow);

    const pageTagIds = priorityTagIds(item.tags || [], 8);
    if (pageTagIds.length) {
      page.appendChild(buildTagChipsEl(pageTagIds, "recipe-page-tags"));
    }

    const actions = document.createElement("div");
    actions.className = "recipe-page-actions";

    const isMade = Storage.isMade(item.id);
    const madeBtn = document.createElement("button");
    madeBtn.className = "action-btn" + (isMade ? " active" : "");
    madeBtn.textContent = isMade ? "✓ Já fiz" : "Marcar como feita";
    madeBtn.addEventListener("click", () => {
      const now = Storage.toggleMade(item.id);
      madeBtn.classList.toggle("active", now);
      madeBtn.textContent = now ? "✓ Já fiz" : "Marcar como feita";
    });

    const isFav = Storage.isFavorite(item.id);
    const favBtn = document.createElement("button");
    favBtn.className = "action-btn" + (isFav ? " active" : "");
    favBtn.textContent = isFav ? "★ Favorito" : "☆ Favoritar";
    favBtn.addEventListener("click", () => {
      const now = Storage.toggleFavorite(item.id);
      favBtn.classList.toggle("active", now);
      favBtn.textContent = now ? "★ Favorito" : "☆ Favoritar";
    });

    const isWant = Storage.isWantToCook(item.id);
    const wantBtn = document.createElement("button");
    wantBtn.className = "action-btn" + (isWant ? " active" : "");
    wantBtn.textContent = isWant ? "🔖 Na lista" : "🔖 Quero fazer";
    wantBtn.addEventListener("click", () => {
      const now = Storage.toggleWantToCook(item.id);
      wantBtn.classList.toggle("active", now);
      wantBtn.textContent = now ? "🔖 Na lista" : "🔖 Quero fazer";
    });

    actions.appendChild(madeBtn);
    actions.appendChild(favBtn);
    actions.appendChild(wantBtn);
    page.appendChild(actions);

    if (recipe.steps && recipe.steps.length) {
      const cookBtn = document.createElement("button");
      cookBtn.className = "primary-cta";
      cookBtn.textContent = "👩‍🍳 Começar preparo";
      cookBtn.addEventListener("click", () => Router.toCozinhar(item.id, fromCollectionId));
      page.appendChild(cookBtn);
    }

    const ingSection = document.createElement("div");
    ingSection.className = "recipe-page-section";
    const checked = Storage.getCheckedIngredients(item.id);
    const ingItems = (recipe.ingredients || [])
      .map((ing, i) => {
        const isChecked = checked.indexOf(i) !== -1;
        return (
          '<li><label><input type="checkbox" data-idx="' +
          i +
          '"' +
          (isChecked ? " checked" : "") +
          '><span class="' +
          (isChecked ? "struck" : "") +
          '">' +
          ing +
          "</span></label></li>"
        );
      })
      .join("");
    ingSection.innerHTML = "<h4>Ingredientes</h4><ul class=\"ingredients-list checklist\">" + ingItems + "</ul>";
    page.appendChild(ingSection);
    ingSection.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener("change", () => {
        const idx = parseInt(cb.dataset.idx, 10);
        Storage.toggleIngredient(item.id, idx);
        cb.nextElementSibling.classList.toggle("struck", cb.checked);
      });
    });

    const stepsSection = document.createElement("div");
    stepsSection.className = "recipe-page-section";
    const stepsHtml = (recipe.steps || []).map((s) => "<li>" + s + "</li>").join("");
    stepsSection.innerHTML = "<h4>Modo de preparo</h4><ol class=\"steps-list\">" + stepsHtml + "</ol>";
    page.appendChild(stepsSection);

    if (recipe.tips && recipe.tips.length) {
      const tipsBox = document.createElement("div");
      tipsBox.className = "tips-box";
      tipsBox.innerHTML = "<h4>Dicas</h4><ul>" + recipe.tips.map((t) => "<li>" + t + "</li>").join("") + "</ul>";
      page.appendChild(tipsBox);
    }

    if (recipe.usedFor) {
      const uf = document.createElement("div");
      uf.className = "used-for";
      uf.innerHTML = "<strong>Serve para / usar em:</strong> " + recipe.usedFor;
      page.appendChild(uf);
    }

    content.appendChild(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // ---------- Modo cozinhar ----------
  function playBeep() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      [0, 0.35].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.001, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + delay + 0.02);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + delay + 0.3);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.3);
      });
    } catch (e) {}
  }

  function renderCookMode(id, fromCollectionId) {
    const item = TagModel.findRecipeById(id);
    const recipe = item && item.recipe;
    if (!recipe || !recipe.steps || !recipe.steps.length) {
      Router.toReceita(id, fromCollectionId);
      return;
    }
    const catId = item.catId;

    activeCat = catId;
    refreshActiveCounts = null;

    header.innerHTML = "";
    content.innerHTML = "";
    progressEl.textContent = "";

    let stepIndex = 0;
    const totalSteps = recipe.steps.length;
    let timerInterval = null;
    let timerSeconds = 0;

    const page = document.createElement("div");
    page.className = "cook-page";

    const exitBtn = document.createElement("button");
    exitBtn.className = "back-button";
    exitBtn.textContent = "✕ Sair do modo cozinhar";
    exitBtn.addEventListener("click", () => Router.toReceita(id, fromCollectionId));
    page.appendChild(exitBtn);

    const titleEl = document.createElement("div");
    titleEl.className = "cook-title";
    titleEl.textContent = recipe.name;
    page.appendChild(titleEl);

    const progressWrap = document.createElement("div");
    progressWrap.className = "cook-progress";
    page.appendChild(progressWrap);

    const stepLabel = document.createElement("div");
    stepLabel.className = "cook-step-label";
    page.appendChild(stepLabel);

    const stepText = document.createElement("div");
    stepText.className = "cook-step-text";
    page.appendChild(stepText);

    const navRow = document.createElement("div");
    navRow.className = "cook-nav";
    const prevBtn = document.createElement("button");
    prevBtn.className = "cook-nav-btn";
    prevBtn.textContent = "← Anterior";
    const nextBtn = document.createElement("button");
    nextBtn.className = "cook-nav-btn primary";
    navRow.appendChild(prevBtn);
    navRow.appendChild(nextBtn);
    page.appendChild(navRow);

    const timerBox = document.createElement("div");
    timerBox.className = "cook-timer";
    page.appendChild(timerBox);

    content.appendChild(page);

    function renderTimer() {
      const mm = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
      const ss = String(timerSeconds % 60).padStart(2, "0");
      timerBox.innerHTML =
        '<div class="cook-timer-display">' +
        mm +
        ":" +
        ss +
        "</div>" +
        '<div class="cook-timer-presets">' +
        '<button type="button" data-min="1">1 min</button>' +
        '<button type="button" data-min="5">5 min</button>' +
        '<button type="button" data-min="10">10 min</button>' +
        '<button type="button" data-min="15">15 min</button>' +
        "</div>" +
        '<div class="cook-timer-controls">' +
        '<button type="button" class="timer-toggle">' +
        (timerInterval ? "Pausar" : "Iniciar") +
        "</button>" +
        '<button type="button" class="timer-reset">Zerar</button>' +
        "</div>";

      timerBox.querySelectorAll("[data-min]").forEach((btn) => {
        btn.addEventListener("click", () => {
          clearInterval(timerInterval);
          timerInterval = null;
          timerSeconds = parseInt(btn.dataset.min, 10) * 60;
          renderTimer();
        });
      });
      timerBox.querySelector(".timer-toggle").addEventListener("click", () => {
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
          renderTimer();
          return;
        }
        if (timerSeconds <= 0) return;
        timerInterval = setInterval(() => {
          timerSeconds--;
          if (timerSeconds <= 0) {
            timerSeconds = 0;
            clearInterval(timerInterval);
            timerInterval = null;
            playBeep();
          }
          renderTimer();
        }, 1000);
        renderTimer();
      });
      timerBox.querySelector(".timer-reset").addEventListener("click", () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timerSeconds = 0;
        renderTimer();
      });
    }
    renderTimer();

    function renderStep() {
      stepLabel.textContent = "Passo " + (stepIndex + 1) + " de " + totalSteps;
      stepText.textContent = recipe.steps[stepIndex];
      progressWrap.innerHTML = recipe.steps
        .map(function (_, i) {
          return '<span class="cook-dot' + (i === stepIndex ? " active" : i < stepIndex ? " done" : "") + '"></span>';
        })
        .join("");
      prevBtn.disabled = stepIndex === 0;
      nextBtn.textContent = stepIndex === totalSteps - 1 ? "Finalizar ✓" : "Próximo →";
    }
    renderStep();

    prevBtn.addEventListener("click", () => {
      if (stepIndex > 0) {
        stepIndex--;
        renderStep();
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    nextBtn.addEventListener("click", () => {
      if (stepIndex < totalSteps - 1) {
        stepIndex++;
        renderStep();
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        if (!Storage.isMade(id)) Storage.toggleMade(id);
        clearInterval(timerInterval);
        Router.toReceita(id, fromCollectionId);
      }
    });

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // ---------- Fotos (Wikipedia, com cache local) ----------
  function imageQuery(recipe) {
    return recipe.name.replace(/\s*\([^)]*\)/g, "").trim();
  }

  // Descrições da Wikipedia que indicam que a página NÃO é sobre comida
  // (evita fotos erradas quando o nome do prato coincide com cidade, pessoa, filme etc.)
  const NOT_FOOD_PATTERN =
    /(comuna|munic[ií]pio|cidade|vila|freguesia|distrito|prov[ií]ncia|departamento francês|commune|village|municipality|district|county|province|rio\b|river|montanha|mountain|banda musical|álbum|album|filme|film|canção|song|s[ée]rie de televis[ãa]o|tv series|futebolista|footballer|jogador de|ator\b|atriz\b|actor|actress|pol[ií]tico|politician|escritor|writer|cantor|singer|pintor|painter)/i;

  function isFoodDescription(data) {
    if (!data) return false;
    const text = ((data.description || "") + " " + (data.extract || "").slice(0, 150)).toLowerCase();
    return !NOT_FOOD_PATTERN.test(text);
  }

  async function fetchWikiThumb(query, lang) {
    try {
      const res = await fetch(
        "https://" + lang + ".wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(query),
        { headers: { Accept: "application/json" } }
      );
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.thumbnail && data.thumbnail.source && isFoodDescription(data)) {
        return data.thumbnail.source;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async function opensearchTitle(query, lang, bias) {
    try {
      const q = bias ? query + " " + bias : query;
      const res = await fetch(
        "https://" +
          lang +
          ".wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=1&namespace=0&search=" +
          encodeURIComponent(q)
      );
      if (!res.ok) return null;
      const data = await res.json();
      return (data && data[1] && data[1][0]) || null;
    } catch (e) {
      return null;
    }
  }

  async function findWikiImage(query) {
    let url = await fetchWikiThumb(query, "pt");
    if (url) return url;
    url = await fetchWikiThumb(query, "en");
    if (url) return url;
    const ptTitle = await opensearchTitle(query, "pt", "prato culinária");
    if (ptTitle) {
      url = await fetchWikiThumb(ptTitle, "pt");
      if (url) return url;
    }
    const enTitle = await opensearchTitle(query, "en", "dish food");
    if (enTitle) {
      url = await fetchWikiThumb(enTitle, "en");
      if (url) return url;
    }
    return null;
  }

  function applyImage(el, url) {
    if (url) {
      el.classList.remove("placeholder");
      el.innerHTML = "";
      const img = document.createElement("img");
      img.src = url;
      img.alt = "";
      img.loading = "lazy";
      img.onerror = () => {
        el.classList.add("placeholder");
        el.innerHTML = "🍽";
      };
      el.appendChild(img);
    } else {
      el.classList.add("placeholder");
      el.innerHTML = "🍽";
    }
  }

  async function loadRecipeImage(query, el) {
    const cacheKey = "imgcache-v1:" + query.toLowerCase();
    let cached = null;
    try {
      cached = localStorage.getItem(cacheKey);
    } catch (e) {}
    if (cached) {
      applyImage(el, cached === "__none__" ? null : cached);
      return;
    }
    const url = await findWikiImage(query);
    try {
      localStorage.setItem(cacheKey, url || "__none__");
    } catch (e) {}
    applyImage(el, url);
  }

  // ---------- Roteamento ----------
  function handleRoute(route) {
    if (route.name === "busca") {
      renderBusca(route.tags || [], route.textFilters || []);
    } else if (route.name === "grupo") {
      renderGrupo(route.grupoId);
    } else if (route.name === "categoria") {
      showCategoria(route.catId, route.tags || [], route.role || null);
    } else if (route.name === "receita") {
      renderReceita(route.id, route.from);
    } else if (route.name === "cozinhar") {
      renderCookMode(route.id, route.from);
    } else if (route.name === "favoritos" || route.name === "quero-fazer" || route.name === "historico") {
      renderListView(route.name);
    } else if (route.name === "minhas-receitas") {
      renderPlaceholder("📖 Minhas Receitas", "Em breve: favoritos, quero fazer e histórico, tudo aqui.");
    } else if (route.name === "preparos") {
      renderPlaceholder("🍳 Preparos", "Em breve: acompanhe suas sessões de preparo.");
    } else if (route.name === "lista-compras") {
      renderPlaceholder("🛒 Lista de Compras", "Em breve: monte sua lista de compras a partir das receitas.");
    } else {
      renderHome();
    }
    updateBottomNav(route);
    // toda troca de rota é uma "página nova" — sempre volta pro topo (renderReceita/renderCookMode
    // já faziam isso individualmente; agora fica centralizado aqui pra cobrir home/categoria/busca/listas também).
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  Router.onChange(handleRoute);

  // ---------- Inicialização ----------
  renderBottomNav();
  handleRoute(Router.current());

  // ---------- PWA: service worker (uso offline) ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
