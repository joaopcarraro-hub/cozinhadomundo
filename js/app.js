(function () {
  const header = document.getElementById("category-header");
  const content = document.getElementById("recipes-content");
  const progressEl = document.getElementById("progress");

  const firstCollection = window.COLLECTIONS[0];
  let activeCat = null; // id da coleção atual; null quando estamos na home, busca global ou telas de lista
  // Modal de filtros aberto (Bloco 3) — o overlay vive em document.body, fora de #recipes-content,
  // então uma navegação (ex.: botão/gesto voltar do celular) enquanto o modal está aberto não o
  // remove sozinha. handleRoute() força o fechamento no início de toda troca de rota.
  let closeActiveFilterModal = null;

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
    filter: '<path d="M4 5h16l-6.5 7.5V19l-3 1.6v-8.1Z"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
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

  // Card compartilhado por TODOS os hubs (Fundamentos/Proteínas/Cozinhas do Mundo/Tempo/
  // Dificuldade) via renderGrupo — sem split "X de foco · Y no total" (resíduo do antigo
  // sistema de Foco/Também leva, redundante com o dropdown "Papel da proteína" já disponível
  // um clique depois, dentro da própria categoria) e sem "X/Y feitas" (Bloco 2, item 1+5).
  function renderCollectionCard(collection) {
    const { allRecipes } = TagModel.getRecipesByCollection(collection.id);
    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML =
      '<span class="category-card__icon">' + (collection.icon || "🍽") + "</span>" +
      '<span class="category-card__title">' + collection.label + "</span>" +
      '<span class="category-card__count">' + allRecipes.length + " receitas</span>";
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

  // ---------- Facetas — compartilhadas por renderCategory e renderBusca ----------
  // Cada seção lista só os valores presentes no universo ATUAL já filtrado pelas OUTRAS
  // facetas ativas (não pela própria, senão nunca mostraria alternativa à opção já escolhida),
  // com contagem. Nada vem pré-selecionado (default = Todos/Tanto faz).
  // País/Complexidade/Tempo/Equipamento são multi-seleção com combineMode "or" — valores da
  // MESMA faceta se somam (união); entre facetas diferentes continua AND (matchesGroupedTags
  // já faz isso sozinho pra qualquer prefixo que não seja ingredient:/seasoning:, sem precisar
  // de nenhuma lógica nova aqui). Ingrediente continua multi-seleção com combineMode "and" +
  // fallback OR quando zera — intocado.
  const GENERIC_FACET_DEFS = [
    { key: "country", label: "País", prefix: "country:", multi: true, combineMode: "or" },
    { key: "difficulty", label: "Complexidade", prefix: "difficulty:", multi: true, combineMode: "or" },
    { key: "time", label: "Tempo", prefix: "time:", multi: true, combineMode: "or" },
    // layout: "tiles" (piloto de redesenho visual, só Equipamento por ora) — muda SÓ a
    // apresentação (grade de tiles com ícone/contagem em vez de lista de checkbox); a lógica
    // de estado/combinação continua a mesma de qualquer combineMode "or" (ver
    // renderTileSectionBody, que reaproveita computeFacetOptions sem recalcular nada).
    { key: "equipment", label: "Equipamento", prefix: "equipment:", multi: true, combineMode: "or", layout: "tiles" },
    { key: "ingredient", label: "Ingrediente", prefix: "ingredient:", multi: true, combineMode: "and" },
  ];

  // Ícones reais pro piloto de tiles de Equipamento — substituem os emoji provisórios. Arquivos
  // originais ficam em icons/equipment/ (fonte/atribuição), mas o SVG é EMBUTIDO aqui como
  // string, não carregado via fetch() — um fetch é assíncrono, e um usuário abrindo o app e
  // indo direto no filtro (ou qualquer reload+abertura imediata) podia abrir o modal ANTES do
  // fetch terminar, renderizando o tile sem ícone até uma re-renderização tardia (bug real,
  // confirmado por screenshot: só os 3 PNG apareciam, os 4 SVG ficavam em branco). Embutir a
  // string elimina a corrida por completo — mesmo padrão dos outros ícones outline do app
  // (ICONS/ICON_SVG_ATTRS no topo do arquivo), sempre disponível de graça, sem round-trip.
  // fill="#000000" já foi trocado por fill="currentColor" nesses textos (e nos arquivos-fonte)
  // pra recolorir via CSS conforme o estado do tile.
  const EQUIPMENT_SVG_MARKUP = {
    "equipment:forno":
      '<svg fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xml:space="preserve"><g><g><path d="M493.9,13.3h-49.5C444,5.9,437.9,0,430.4,0H292.6c-7.5,0-13.6,5.9-14,13.3h-49.1C229.1,5.9,223,0,215.4,0H77.7 c-7.5,0-13.6,5.9-14,13.3H14.1C6.3,13.3,0,19.7,0,27.5v466.4c0,7.8,6.3,14.1,14.1,14.1h479.8c7.8,0,14.1-6.3,14.1-14.1V27.5 C508,19.7,501.7,13.3,493.9,13.3z M28.2,41.6h451.6v90.3H28.2V41.6z M479.8,479.8H28.2V160.1h451.6V479.8z"/></g></g><g><g><path d="M427.8,196.6H80.2c-7.8,0-14.1,6.3-14.1,14.1V439c0,7.8,6.3,14.1,14.1,14.1h347.5c7.8,0,14.1-6.3,14.1-14.1V210.7 C441.9,203,435.6,196.6,427.8,196.6z M94.3,424.9v-200h319.3v200H94.3z"/></g></g><g><g><path d="M107.5,72.8H96.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C121.6,79.1,115.3,72.8,107.5,72.8z"/></g></g><g><g><path d="M208.8,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C222.9,79.1,216.6,72.8,208.8,72.8z"/></g></g><g><g><path d="M310.1,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C324.2,79.1,317.9,72.8,310.1,72.8z"/></g></g><g><g><path d="M411.3,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C425.4,79.1,419.1,72.8,411.3,72.8z"/></g></g><g><g><path d="M295.1,246.6h-82.2c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h82.2c7.8,0,14.1-6.3,14.1-14.1 C309.2,252.9,302.9,246.6,295.1,246.6z"/></g></g></svg>',
    "equipment:liquidificador":
      '<svg fill="currentColor" width="800px" height="800px" viewBox="-18.49 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 85.89 122.88" xml:space="preserve"><g><path d="M10.36,23.42h53.68c0.07,0,0.15,0,0.24,0.01c0.68,0.06,1.31,0.36,1.78,0.82c0.5,0.49,0.82,1.16,0.82,1.91 c0,0.07,0,0.15-0.01,0.22l0,0.04L66.38,32h17.96c0.86,0,1.55,0.69,1.55,1.55c0,0.06,0,0.13-0.01,0.19 c-0.44,11-2.54,19.75-6.38,26.12c-3.82,6.35-9.31,10.35-16.55,11.9l-1.4,16.28c-0.06,0.73-0.38,1.4-0.86,1.88 c-0.04,0.04-0.08,0.08-0.13,0.11c-0.49,0.44-1.12,0.7-1.83,0.7H15.02c-0.77,0-1.45-0.31-1.96-0.82l0,0 c-0.49-0.49-0.8-1.16-0.86-1.9L7.54,26.37c-0.01-0.08-0.01-0.15-0.01-0.2c0-0.75,0.32-1.42,0.82-1.92c0.47-0.46,1.11-0.77,1.8-0.82 C10.24,23.43,10.31,23.42,10.36,23.42L10.36,23.42z M13.69,103l0.12-5.43c0.01-0.85,0.7-1.52,1.55-1.52v-0.01h44.09 c0.86,0,1.55,0.69,1.55,1.55v5.43l13.1,17.38c0.52,0.68,0.38,1.65-0.3,2.17c-0.28,0.21-0.61,0.31-0.93,0.31v0H1.55 c-0.86,0-1.55-0.69-1.55-1.55c0-0.41,0.16-0.79,0.43-1.07L13.69,103L13.69,103z M37.21,101.83c3.14,0,5.69,2.55,5.69,5.69 c0,3.14-2.55,5.69-5.69,5.69c-3.14,0-5.69-2.55-5.69-5.69C31.52,104.38,34.07,101.83,37.21,101.83L37.21,101.83z M16.88,99.14 l-0.11,4.42h0c0,0.32-0.11,0.64-0.32,0.92L4.69,119.78h65.06l-11.49-15.25c-0.23-0.27-0.36-0.62-0.36-1v-4.39H16.88L16.88,99.14z M6.72,11.4h26.99c-1.71-1.1-2.85-2.41-2.85-5.21c0-2.8,2.77-6.19,6.19-6.19c3.42,0,6.19,3.39,6.19,6.19c0,2.8-1.14,4.11-2.85,5.21 h27.3c0.47,0,0.86,0.39,0.86,0.86v6.08c0,0.47-0.39,0.86-0.86,0.86H6.72c-0.47,0-0.86-0.39-0.86-0.86v-6.08 C5.86,11.79,6.25,11.4,6.72,11.4L6.72,11.4z M66.12,36.09l-2.88,31.44c15.25-3.88,18.53-17.24,19.31-31.44H66.12L66.12,36.09z M31.81,65.77c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55 c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,65.77z M31.81,38c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31 c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,38z M31.81,51.88c-0.86,0-1.55-0.69-1.55-1.55 c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,51.88z M31.81,79.65 c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81 L31.81,79.65z M63.74,26.78H10.66l4.61,60.24h43.2L63.74,26.78L63.74,26.78z M10.63,26.39l0,0.02l0,0L10.63,26.39L10.63,26.39z"/></g></svg>',
    "equipment:batedeira":
      '<svg fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><path d="M490.667,170.667c11.782,0,21.333-9.551,21.333-21.333v-128C512,9.551,502.449,0,490.667,0H21.333 C9.551,0,0,9.551,0,21.333v469.333C0,502.449,9.551,512,21.333,512h469.333c11.782,0,21.333-9.551,21.333-21.333v-85.333 c0-11.782-9.551-21.333-21.333-21.333H415.39c20.274-22.648,32.61-52.55,32.61-85.333c0-11.782-9.551-21.333-21.333-21.333 h-2.132c-8.475-41.82-41.382-74.726-83.201-83.201v-23.465H490.667z M469.333,469.333H42.667V42.667h426.667V128H106.667 c-11.782,0-21.333,9.551-21.333,21.333v256c0,11.782,9.551,21.333,21.333,21.333h362.667V469.333z M298.667,277.333h-39.02 c6.42-18.199,20.821-32.6,39.02-39.02V277.333z M237.356,320h165.287c-9.476,36.8-42.89,64-82.644,64 C280.247,384,246.832,356.8,237.356,320z M380.353,277.333h-39.02v-39.02C359.533,244.733,373.933,259.134,380.353,277.333z M298.667,194.132c-41.82,8.475-74.726,41.382-83.201,83.201h-2.132c-11.782,0-21.333,9.551-21.333,21.333 c0,32.783,12.336,62.686,32.61,85.333H128V170.667h170.667V194.132z"/><path d="M149.333,106.667c11.776,0,21.333-9.557,21.333-21.333S161.109,64,149.333,64S128,73.557,128,85.333 S137.557,106.667,149.333,106.667z"/><path d="M234.667,106.667c11.776,0,21.333-9.557,21.333-21.333S246.443,64,234.667,64s-21.333,9.557-21.333,21.333 S222.891,106.667,234.667,106.667z"/></g></g></g></svg>',
    "equipment:microondas":
      '<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M3 8C1.355469 8 0 9.355469 0 11L0 39C0 40.644531 1.355469 42 3 42L5 42L5 43C5 44.09375 5.90625 45 7 45L10 45C11.09375 45 12 44.09375 12 43L12 42L38 42L38 43C38 44.09375 38.90625 45 40 45L43 45C44.09375 45 45 44.09375 45 43L45 42L47 42C48.644531 42 50 40.644531 50 39L50 11C50 9.355469 48.644531 8 47 8 Z M 3 10L47 10C47.5625 10 48 10.4375 48 11L48 39C48 39.5625 47.5625 40 47 40L39.1875 40C39.054688 39.972656 38.914063 39.972656 38.78125 40L6.1875 40C6.054688 39.972656 5.914063 39.972656 5.78125 40L3 40C2.4375 40 2 39.5625 2 39L2 11C2 10.4375 2.4375 10 3 10 Z M 5 13L5 37L40 37L40 13 Z M 7 15L38 15L38 35L7 35 Z M 44 16C42.894531 16 42 16.894531 42 18C42 19.105469 42.894531 20 44 20C45.105469 20 46 19.105469 46 18C46 16.894531 45.105469 16 44 16 Z M 34.15625 19.9375C33.957031 19.933594 33.761719 19.988281 33.59375 20.09375C33.59375 20.09375 28.964844 22 26.125 22C24.707031 22 23.75 21.59375 22.59375 21.09375C21.4375 20.59375 20.066406 20 18.21875 20C14.523438 20 10.5625 22.09375 10.5625 22.09375C10.0625 22.335938 9.851563 22.9375 10.09375 23.4375C10.335938 23.9375 10.9375 24.148438 11.4375 23.90625C11.4375 23.90625 15.332031 22 18.21875 22C19.664063 22 20.628906 22.40625 21.78125 22.90625C22.933594 23.40625 24.296875 24 26.125 24C29.785156 24 34.40625 21.90625 34.40625 21.90625C34.894531 21.78125 35.214844 21.3125 35.148438 20.8125C35.085938 20.3125 34.660156 19.9375 34.15625 19.9375 Z M 44 23C42.894531 23 42 23.894531 42 25C42 26.105469 42.894531 27 44 27C45.105469 27 46 26.105469 46 25C46 23.894531 45.105469 23 44 23 Z M 34.15625 25.9375C33.957031 25.933594 33.761719 25.988281 33.59375 26.09375C33.59375 26.09375 28.964844 28 26.125 28C24.707031 28 23.75 27.59375 22.59375 27.09375C21.4375 26.59375 20.066406 26 18.21875 26C14.523438 26 10.5625 28.09375 10.5625 28.09375C10.0625 28.335938 9.851563 28.9375 10.09375 29.4375C10.335938 29.9375 10.9375 30.148438 11.4375 29.90625C11.4375 29.90625 15.332031 28 18.21875 28C19.664063 28 20.628906 28.40625 21.78125 28.90625C22.933594 29.40625 24.296875 30 26.125 30C29.785156 30 34.40625 27.90625 34.40625 27.90625C34.894531 27.78125 35.214844 27.3125 35.148438 26.8125C35.085938 26.3125 34.660156 25.9375 34.15625 25.9375 Z M 44 30C42.894531 30 42 30.894531 42 32C42 33.105469 42.894531 34 44 34C45.105469 34 46 33.105469 46 32C46 30.894531 45.105469 30 44 30 Z M 7 42L10 42L10 43L7 43 Z M 40 42L43 42L43 43L40 43Z"/></svg>',
    // Fonte não identificada (arquivo recebido sem metadados de autoria) — crédito genérico em
    // buildIconCreditsEl(). fill="currentColor" já vinha assim no arquivo original, sem edição.
    "equipment:processador":
      '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none"><title>Ícone vetorial</title><path d="M 173 0 L 173 15 L 174 16 L 189 16 L 190 17 L 190 82 L 187 84 L 180 84 L 179 85 L 172 85 L 171 86 L 167 86 L 166 87 L 162 87 L 161 88 L 157 88 L 156 89 L 153 89 L 152 90 L 150 90 L 149 91 L 146 91 L 145 92 L 143 92 L 142 93 L 140 93 L 139 94 L 137 94 L 136 95 L 134 95 L 131 97 L 129 97 L 126 99 L 124 99 L 123 100 L 122 100 L 121 101 L 118 102 L 115 105 L 114 105 L 108 111 L 108 112 L 105 115 L 105 116 L 102 121 L 102 123 L 101 124 L 101 126 L 100 127 L 100 131 L 99 132 L 99 296 L 98 297 L 98 299 L 97 300 L 97 302 L 96 303 L 96 305 L 95 306 L 95 308 L 94 309 L 94 311 L 93 312 L 93 314 L 92 315 L 92 318 L 91 319 L 91 321 L 90 322 L 90 325 L 89 326 L 89 329 L 88 330 L 88 334 L 87 335 L 87 339 L 86 340 L 86 345 L 85 346 L 85 352 L 84 353 L 84 361 L 83 362 L 83 486 L 98 486 L 99 487 L 99 511 L 148 511 L 148 487 L 149 486 L 362 486 L 363 487 L 363 511 L 412 511 L 412 487 L 413 486 L 428 486 L 428 362 L 427 361 L 427 353 L 426 352 L 426 346 L 425 345 L 425 340 L 424 339 L 424 335 L 423 334 L 423 330 L 422 329 L 422 326 L 421 325 L 421 322 L 420 321 L 420 319 L 419 318 L 419 315 L 418 314 L 418 312 L 417 311 L 417 309 L 416 308 L 416 306 L 415 305 L 415 303 L 414 302 L 414 300 L 413 299 L 413 297 L 412 296 L 412 132 L 411 131 L 411 127 L 410 126 L 410 124 L 409 123 L 409 121 L 408 120 L 408 119 L 407 118 L 406 115 L 403 112 L 403 111 L 397 105 L 396 105 L 393 102 L 392 102 L 387 99 L 385 99 L 384 98 L 383 98 L 382 97 L 380 97 L 377 95 L 375 95 L 374 94 L 372 94 L 371 93 L 369 93 L 368 92 L 366 92 L 365 91 L 362 91 L 361 90 L 359 90 L 358 89 L 355 89 L 354 88 L 350 88 L 349 87 L 345 87 L 344 86 L 340 86 L 339 85 L 332 85 L 331 84 L 324 84 L 321 82 L 321 17 L 322 16 L 337 16 L 338 15 L 338 0 Z M 379 487 L 380 486 L 395 486 L 396 487 L 396 494 L 395 495 L 380 495 L 379 494 Z M 115 487 L 116 486 L 131 486 L 132 487 L 132 494 L 131 495 L 116 495 L 115 494 Z M 111 307 L 113 305 L 398 305 L 400 307 L 400 309 L 401 310 L 401 312 L 402 313 L 402 315 L 403 316 L 403 319 L 404 320 L 404 322 L 405 323 L 405 325 L 406 326 L 406 330 L 407 331 L 407 334 L 408 335 L 408 339 L 409 340 L 409 343 L 410 344 L 410 351 L 411 352 L 411 358 L 412 359 L 412 373 L 413 374 L 413 437 L 412 438 L 322 438 L 322 453 L 412 453 L 413 454 L 413 470 L 412 471 L 99 471 L 98 470 L 98 454 L 99 453 L 189 453 L 189 438 L 99 438 L 98 437 L 98 374 L 99 373 L 99 359 L 100 358 L 100 352 L 101 351 L 101 344 L 102 343 L 102 340 L 103 339 L 103 335 L 104 334 L 104 331 L 105 330 L 105 326 L 106 325 L 106 323 L 107 322 L 107 320 L 108 319 L 108 316 L 109 315 L 109 313 L 110 312 L 110 310 L 111 309 Z M 249 322 L 248 323 L 242 323 L 241 324 L 238 324 L 237 325 L 235 325 L 234 326 L 232 326 L 231 327 L 230 327 L 229 328 L 228 328 L 227 329 L 226 329 L 225 330 L 222 331 L 220 333 L 219 333 L 217 335 L 216 335 L 207 343 L 207 344 L 203 348 L 203 349 L 200 352 L 200 353 L 199 354 L 199 355 L 198 356 L 198 357 L 197 358 L 197 359 L 194 364 L 194 366 L 193 367 L 193 369 L 192 370 L 192 373 L 191 374 L 191 379 L 190 380 L 190 395 L 191 396 L 191 401 L 192 402 L 192 405 L 193 406 L 193 408 L 194 409 L 194 411 L 195 412 L 195 414 L 196 415 L 196 416 L 197 417 L 198 420 L 200 422 L 200 423 L 202 425 L 202 426 L 205 429 L 205 430 L 213 438 L 214 438 L 217 441 L 218 441 L 223 445 L 224 445 L 229 448 L 231 448 L 234 450 L 236 450 L 237 451 L 240 451 L 241 452 L 246 452 L 247 453 L 264 453 L 265 452 L 270 452 L 271 451 L 274 451 L 275 450 L 277 450 L 280 448 L 282 448 L 283 447 L 284 447 L 285 446 L 288 445 L 290 443 L 291 443 L 293 441 L 294 441 L 297 438 L 298 438 L 306 430 L 306 429 L 309 426 L 309 425 L 313 420 L 313 419 L 316 414 L 316 412 L 317 411 L 317 409 L 318 408 L 318 406 L 319 405 L 319 402 L 320 401 L 320 396 L 321 395 L 321 380 L 320 379 L 320 374 L 319 373 L 319 370 L 318 369 L 318 367 L 317 366 L 317 364 L 316 363 L 316 362 L 315 361 L 315 360 L 314 359 L 314 358 L 313 357 L 313 356 L 312 355 L 311 352 L 308 349 L 308 348 L 304 344 L 304 343 L 300 339 L 299 339 L 295 335 L 294 335 L 289 331 L 288 331 L 287 330 L 286 330 L 285 329 L 284 329 L 279 326 L 277 326 L 276 325 L 274 325 L 273 324 L 270 324 L 269 323 L 263 323 L 262 322 Z M 268 339 L 269 340 L 272 340 L 273 341 L 274 341 L 275 342 L 276 342 L 277 343 L 278 343 L 279 344 L 282 345 L 285 348 L 286 348 L 295 357 L 295 358 L 298 361 L 298 362 L 299 363 L 299 364 L 300 365 L 300 366 L 303 371 L 303 374 L 304 375 L 304 377 L 305 378 L 305 386 L 306 387 L 306 388 L 305 389 L 305 397 L 304 398 L 304 400 L 303 401 L 303 404 L 300 409 L 300 411 L 299 412 L 299 413 L 296 416 L 296 417 L 285 428 L 284 428 L 279 432 L 278 432 L 277 433 L 275 433 L 272 435 L 270 435 L 269 436 L 266 436 L 265 437 L 264 437 L 263 436 L 263 340 L 264 339 Z M 243 339 L 247 339 L 248 340 L 248 436 L 247 437 L 246 437 L 245 436 L 242 436 L 241 435 L 239 435 L 236 433 L 234 433 L 233 432 L 232 432 L 230 430 L 229 430 L 227 428 L 226 428 L 215 417 L 215 416 L 211 411 L 211 409 L 208 404 L 208 401 L 207 400 L 207 398 L 206 397 L 206 378 L 207 377 L 207 375 L 208 374 L 208 371 L 209 370 L 209 369 L 210 368 L 210 367 L 211 366 L 211 365 L 212 364 L 213 361 L 216 358 L 216 357 L 225 348 L 226 348 L 231 344 L 232 344 L 237 341 L 239 341 L 240 340 L 242 340 Z M 230 141 L 232 139 L 279 139 L 281 141 L 281 181 L 280 182 L 231 182 L 230 181 Z M 115 140 L 116 139 L 213 139 L 215 141 L 215 197 L 296 197 L 296 141 L 298 139 L 395 139 L 396 140 L 396 288 L 395 289 L 116 289 L 115 288 Z M 306 256 L 306 272 L 370 272 L 371 271 L 371 256 Z M 223 256 L 223 272 L 288 272 L 288 256 Z M 140 256 L 140 271 L 141 272 L 205 272 L 205 256 Z M 264 231 L 264 247 L 329 247 L 329 231 Z M 182 231 L 182 247 L 247 247 L 247 231 Z M 296 99 L 297 98 L 313 98 L 314 99 L 327 99 L 328 100 L 334 100 L 335 101 L 340 101 L 341 102 L 345 102 L 346 103 L 349 103 L 350 104 L 353 104 L 354 105 L 357 105 L 358 106 L 361 106 L 362 107 L 364 107 L 365 108 L 367 108 L 370 110 L 372 110 L 373 111 L 375 111 L 378 113 L 380 113 L 381 114 L 384 115 L 386 117 L 387 117 L 391 121 L 391 122 L 392 123 L 391 124 L 297 124 L 296 123 Z M 230 99 L 231 98 L 280 98 L 281 99 L 281 123 L 280 124 L 231 124 L 230 123 Z M 215 99 L 215 123 L 214 124 L 120 124 L 119 123 L 120 122 L 120 121 L 124 117 L 125 117 L 127 115 L 128 115 L 131 113 L 133 113 L 136 111 L 138 111 L 139 110 L 141 110 L 144 108 L 146 108 L 147 107 L 149 107 L 150 106 L 153 106 L 154 105 L 157 105 L 158 104 L 161 104 L 162 103 L 165 103 L 166 102 L 170 102 L 171 101 L 176 101 L 177 100 L 183 100 L 184 99 L 197 99 L 198 98 L 214 98 Z M 205 17 L 206 16 L 305 16 L 306 17 L 306 81 L 304 83 L 207 83 L 205 81 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "equipment:sous-vide":
      '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none"><title>Ícone vetorial</title><path d="M 216 1 L 215 2 L 213 2 L 212 3 L 210 3 L 209 4 L 208 4 L 206 6 L 203 7 L 193 17 L 193 18 L 191 20 L 191 21 L 189 24 L 189 26 L 187 29 L 187 33 L 186 34 L 186 93 L 187 94 L 187 97 L 188 98 L 188 100 L 189 101 L 189 102 L 190 103 L 190 104 L 191 105 L 192 108 L 195 111 L 195 112 L 200 117 L 201 117 L 202 118 L 202 220 L 201 221 L 177 221 L 176 222 L 170 222 L 169 223 L 166 223 L 163 225 L 161 225 L 160 226 L 159 226 L 158 227 L 157 227 L 156 228 L 153 229 L 150 232 L 149 232 L 141 240 L 141 241 L 138 244 L 138 245 L 137 246 L 137 247 L 136 248 L 136 249 L 133 254 L 133 256 L 132 257 L 132 260 L 131 261 L 131 267 L 130 268 L 130 452 L 159 452 L 159 325 L 160 324 L 214 324 L 215 325 L 215 463 L 216 464 L 216 471 L 217 472 L 217 475 L 218 476 L 218 479 L 220 482 L 220 484 L 221 485 L 221 486 L 223 488 L 223 489 L 224 490 L 224 491 L 226 493 L 226 494 L 230 498 L 230 499 L 235 504 L 236 504 L 241 509 L 242 509 L 244 511 L 323 511 L 325 509 L 326 509 L 330 505 L 331 505 L 337 499 L 337 498 L 340 495 L 340 494 L 344 489 L 344 488 L 346 485 L 346 483 L 348 480 L 348 478 L 349 477 L 349 474 L 350 473 L 350 469 L 351 468 L 351 325 L 352 324 L 364 324 L 364 119 L 373 110 L 373 109 L 375 107 L 375 106 L 378 101 L 378 99 L 379 98 L 379 96 L 380 95 L 380 90 L 381 89 L 381 37 L 380 36 L 380 32 L 379 31 L 379 28 L 378 27 L 378 25 L 377 24 L 376 21 L 374 19 L 374 18 L 372 16 L 372 15 L 366 9 L 365 9 L 362 6 L 361 6 L 360 5 L 359 5 L 354 2 L 351 2 L 350 1 L 346 1 L 345 0 L 221 0 L 220 1 Z M 246 324 L 321 324 L 322 325 L 322 465 L 321 466 L 321 469 L 320 470 L 320 472 L 319 473 L 319 474 L 317 476 L 317 477 L 312 482 L 254 482 L 251 479 L 251 478 L 248 475 L 248 474 L 247 473 L 247 471 L 246 470 L 246 468 L 245 467 L 245 463 L 244 462 L 244 326 Z M 231 252 L 233 250 L 334 250 L 335 251 L 335 294 L 334 295 L 232 295 L 231 294 Z M 167 255 L 168 255 L 170 253 L 171 253 L 174 251 L 177 251 L 178 250 L 201 250 L 202 251 L 202 294 L 201 295 L 160 295 L 159 294 L 159 269 L 160 268 L 160 265 L 161 264 L 162 261 L 164 259 L 164 258 Z M 231 128 L 233 126 L 334 126 L 335 127 L 335 220 L 334 221 L 299 221 L 298 220 L 298 160 L 269 160 L 269 220 L 268 221 L 232 221 L 231 220 Z M 215 37 L 216 36 L 216 35 L 220 31 L 221 31 L 224 29 L 343 29 L 349 33 L 349 34 L 351 36 L 351 38 L 352 39 L 352 87 L 351 88 L 351 90 L 350 91 L 350 92 L 346 96 L 345 96 L 344 97 L 223 97 L 222 96 L 221 96 L 216 91 L 216 90 L 215 89 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
  };
  // 3 PNG (Icons8) — <img src>, sem race: o browser exibe assim que o arquivo chega, sem
  // depender de nenhum JS pra "aplicar" — nunca fica em branco esperando fetch/cache.
  const EQUIPMENT_PNG_SRC = {
    "equipment:air-fryer": "icons/equipment/air-fryer.png",
    "equipment:panela-de-pressao": "icons/equipment/panela-de-pressao.png",
    "equipment:churrasqueira": "icons/equipment/churrasqueira.png",
  };
  // Todos os 9 valores de Equipamento têm ícone (6 SVG embutido + 3 PNG). O fallback "" abaixo
  // fica só como rede de segurança pra um futuro valor de equipamento sem ícone ainda mapeado.
  function equipmentTileIconHtml(tagId) {
    if (EQUIPMENT_SVG_MARKUP[tagId]) {
      return '<span class="filter-tile__icon filter-tile__icon--svg" aria-hidden="true">' + EQUIPMENT_SVG_MARKUP[tagId] + "</span>";
    }
    if (EQUIPMENT_PNG_SRC[tagId]) {
      return '<img class="filter-tile__icon filter-tile__icon--png" src="' + EQUIPMENT_PNG_SRC[tagId] + '" alt="" aria-hidden="true">';
    }
    return ""; // sem ícone disponível — sem espaço reservado
  }

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

  // Calcula as opções (com contagem) de UMA faceta, restringindo o universo pelas OUTRAS
  // facetas já selecionadas (cross-facet AND) — extraído da antiga renderFacetBar sem mudar a
  // lógica, só pra ser reaproveitado pelo acordeão do modal (Bloco 3).
  function computeFacetOptions(universeItems, facetState, defs, def) {
    const otherTagIds = [];
    defs.forEach((d) => {
      if (d.key === def.key) return;
      if (d.multi) otherTagIds.push.apply(otherTagIds, facetState[d.key] || []);
      else if (facetState[d.key]) otherTagIds.push(facetState[d.key]);
    });
    const restricted = universeItems.filter((item) => matchesGroupedTags(item.tags, otherTagIds));
    return def.prefix ? facetOptionsFromPrefix(restricted, def.prefix) : facetOptionsFromStatic(restricted, def.staticOptions);
  }

  // ---------- Modal de filtros em acordeão (Bloco 3 — design tokens v3) ----------
  // Substitui a antiga barra de dropdowns sempre-visível por um botão "Filtros" (com badge) que
  // abre um modal cheio de tela. A CARDINALIDADE e a LÓGICA de cada faceta não mudam — só onde
  // moram na tela: matchesGroupedTags, hasIngredientLikeMultiSelect, facetOptionsFromPrefix/
  // Static, readFacetStateFromTags, facetStateToTagIds continuam intocadas, só reaproveitadas.
  // Mudanças dentro do modal ficam em RASCUNHO (draftFacetState/draftProteinRole) — só se
  // aplicam de fato ao clicar "Ver resultados"; "Cancelar" descarta o rascunho sem tocar no
  // estado real. "Limpar filtros" zera só o RASCUNHO (todas as seções voltam a "Todos"/nenhuma
  // selecionada, rodapé recalcula pra contagem sem filtro) e MANTÉM o modal aberto — não
  // aplica nem fecha sozinho, o usuário ainda confirma em "Ver resultados" ou desiste em
  // "Cancelar".
  //
  // triggerWrapEl: onde o botão "Filtros" + badge é renderizado (era o antigo facetBarEl).
  // defs: GENERIC_FACET_DEFS.
  // opts:
  //   facetState: estado ATUAL aplicado (só é mutado quando o rascunho é confirmado).
  //   getUniverse(draftProteinRoleValue): universo de receitas pra calcular opções/contagens —
  //     cada caller já tem essa conta pronta, só reaproveita (não recalcula nada novo).
  //   proteinRole: null OU { value, setValue(v), computeCounts(draftFacetState) -> {focus,
  //     secondary} } — só passado por renderCategory em coleções de proteína.
  //   countForDraft(draftFacetState, draftProteinRoleValue): quantas receitas o resultado teria
  //     se esse rascunho fosse aplicado agora (mesma conta de currentItems()/facetUniverse()).
  //   onApply(): chamado DEPOIS que facetState/proteinRole já foram escritos com o rascunho —
  //     é o mesmo corpo que cada dropdown antigo já disparava no onChange, só que uma vez só.
  // A rede de segurança OR do Ingrediente (zero-resultado) continua vivendo só na tela de
  // resultados (renderList/renderResults, intocadas) — o modal não duplica essa UI, só deixa
  // "Ver resultados" aplicável mesmo com N=0, pra cair no mesmo empty-state+fallback de sempre.
  function renderFacetModal(triggerWrapEl, defs, opts) {
    const activeCount =
      defs.reduce((n, d) => n + (d.multi ? (opts.facetState[d.key] || []).length : opts.facetState[d.key] ? 1 : 0), 0) +
      (opts.proteinRole && opts.proteinRole.value ? 1 : 0);

    triggerWrapEl.innerHTML =
      '<button type="button" class="filter-trigger">' +
      iconSvg("filter", "filter-trigger__icon") +
      "<span>Filtros</span>" +
      (activeCount ? '<span class="filter-trigger__badge">' + activeCount + "</span>" : "") +
      "</button>";
    triggerWrapEl.querySelector(".filter-trigger").addEventListener("click", openModal);

    function openModal() {
      // Rascunho: cópia independente do estado aplicado — Cancelar descarta sem tocar no real.
      const draftFacetState = {};
      defs.forEach((d) => {
        draftFacetState[d.key] = d.multi ? (opts.facetState[d.key] || []).slice() : opts.facetState[d.key];
      });
      let draftProteinRole = opts.proteinRole ? opts.proteinRole.value : null;
      let openSectionKey = null;

      const overlay = document.createElement("div");
      overlay.className = "filter-modal-overlay";
      overlay.innerHTML =
        '<div class="filter-modal" role="dialog" aria-modal="true" aria-label="Filtros">' +
        '<div class="filter-modal__header">' +
        '<button type="button" class="filter-modal__cancel">Cancelar</button>' +
        "<h3>Filtros</h3>" +
        '<span class="filter-modal__header-spacer" aria-hidden="true"></span>' +
        "</div>" +
        '<div class="filter-modal__clear-row"></div>' +
        '<div class="filter-modal__body"></div>' +
        '<div class="filter-modal__footer"><button type="button" class="filter-modal__apply"></button></div>' +
        "</div>";
      document.body.appendChild(overlay);
      document.body.classList.add("filter-modal-open");

      const clearRowEl = overlay.querySelector(".filter-modal__clear-row");
      const bodyEl = overlay.querySelector(".filter-modal__body");
      const applyBtn = overlay.querySelector(".filter-modal__apply");

      function closeModal() {
        overlay.remove();
        document.body.classList.remove("filter-modal-open");
        if (closeActiveFilterModal === closeModal) closeActiveFilterModal = null;
      }
      closeActiveFilterModal = closeModal;
      overlay.querySelector(".filter-modal__cancel").addEventListener("click", closeModal);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
      });

      function draftIsActive() {
        return defs.some((d) => (d.multi ? (draftFacetState[d.key] || []).length : draftFacetState[d.key])) || !!draftProteinRole;
      }

      // Limpar filtros só zera o RASCUNHO e mantém o modal aberto (todas as seções colapsadas)
      // — o usuário ainda precisa confirmar em "Ver resultados" ou desistir em "Cancelar",
      // igual a qualquer outra mudança de faceta. Não aplica nada sozinho.
      function renderClearRow() {
        if (!draftIsActive()) {
          clearRowEl.innerHTML = "";
          return;
        }
        clearRowEl.innerHTML = '<button type="button" class="btn-clear-filters">Limpar filtros</button>';
        clearRowEl.querySelector(".btn-clear-filters").addEventListener("click", () => {
          defs.forEach((d) => {
            draftFacetState[d.key] = d.multi ? [] : null;
          });
          draftProteinRole = null;
          openSectionKey = null;
          renderBody();
        });
      }

      function renderFooter() {
        const n = opts.countForDraft(draftFacetState, draftProteinRole);
        applyBtn.textContent = "Ver resultados (" + n + ")";
      }
      applyBtn.addEventListener("click", () => {
        defs.forEach((d) => {
          opts.facetState[d.key] = draftFacetState[d.key];
        });
        if (opts.proteinRole) opts.proteinRole.setValue(draftProteinRole);
        closeModal();
        opts.onApply();
      });

      function toggleSection(key) {
        openSectionKey = openSectionKey === key ? null : key;
        renderBody();
      }

      function sectionSummary(def) {
        if (def.multi) {
          const n = (draftFacetState[def.key] || []).length;
          return n ? n + " selecionado" + (n === 1 ? "" : "s") : "";
        }
        if (!draftFacetState[def.key]) return "";
        const tag = TagModel.getTagById(draftFacetState[def.key]);
        return tag ? tag.label : "";
      }

      function renderSingleSectionBody(sectionBody, def, options) {
        const currentVal = draftFacetState[def.key] || "";
        let html =
          '<label class="filter-option"><input type="radio" name="filter-' +
          def.key +
          '"' +
          (!currentVal ? " checked" : "") +
          "><span>" +
          (def.allLabel || "Todos") +
          "</span></label>";
        options.forEach((o) => {
          html +=
            '<label class="filter-option"><input type="radio" name="filter-' +
            def.key +
            '" value="' +
            o.tagId +
            '"' +
            (o.tagId === currentVal ? " checked" : "") +
            "><span>" +
            o.tag.label +
            " (" +
            o.count +
            ")</span></label>";
        });
        sectionBody.innerHTML = html;
        sectionBody.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.addEventListener("change", () => {
            draftFacetState[def.key] = input.value || null;
            renderBody();
          });
        });
      }

      function renderMultiSectionBody(sectionBody, def, options) {
        const selectedIds = draftFacetState[def.key] || [];
        const addableOptions = options.filter((o) => selectedIds.indexOf(o.tagId) === -1);
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
        sectionBody.innerHTML =
          (chipsHtml ? '<div class="facet-multi-chips">' + chipsHtml + "</div>" : "") +
          (addableOptions.length
            ? '<select><option value="">+ Adicionar ' +
              def.label.toLowerCase() +
              "</option>" +
              addableOptions.map((o) => '<option value="' + o.tagId + '">' + o.tag.label + " (" + o.count + ")</option>").join("") +
              "</select>"
            : "");
        sectionBody.querySelectorAll("[data-remove]").forEach((btn) => {
          btn.addEventListener("click", () => {
            draftFacetState[def.key] = selectedIds.filter((id) => id !== btn.dataset.remove);
            renderBody();
          });
        });
        const select = sectionBody.querySelector("select");
        if (select) {
          select.addEventListener("change", () => {
            if (!select.value) return;
            draftFacetState[def.key] = selectedIds.concat([select.value]);
            renderBody();
          });
        }
      }

      // País/Complexidade/Tempo/Equipamento (combineMode "or"): checkboxes, valores da MESMA
      // faceta se somam em união — nunca zera ao adicionar mais um, então não precisa de
      // nenhum fallback (diferente de Ingrediente). "Todos" é um item especial que limpa a
      // seleção — não é um valor que combina com os demais, sempre reflete
      // draftFacetState[def.key].length === 0 no re-render (nunca guarda estado próprio).
      // A contagem de cada opção reaproveita computeFacetOptions/facetOptionsFromPrefix
      // exatamente como Ingrediente já fazia (universo restrito pelas OUTRAS facetas, nunca
      // pela própria) — por isso já é "quantos eu teria se também adicionasse este", sem
      // precisar de nenhum cálculo novo.
      function renderCheckboxSectionBody(sectionBody, def, options) {
        const selectedIds = draftFacetState[def.key] || [];
        let html =
          '<label class="filter-option"><input type="checkbox" data-todos' +
          (!selectedIds.length ? " checked" : "") +
          "><span>" +
          (def.allLabel || "Todos") +
          "</span></label>";
        options.forEach((o) => {
          html +=
            '<label class="filter-option"><input type="checkbox" value="' +
            o.tagId +
            '"' +
            (selectedIds.indexOf(o.tagId) !== -1 ? " checked" : "") +
            "><span>" +
            o.tag.label +
            " (" +
            o.count +
            ")</span></label>";
        });
        sectionBody.innerHTML = html;
        sectionBody.querySelector("[data-todos]").addEventListener("change", () => {
          draftFacetState[def.key] = [];
          renderBody();
        });
        sectionBody.querySelectorAll('input[type="checkbox"]:not([data-todos])').forEach((input) => {
          input.addEventListener("change", () => {
            const current = draftFacetState[def.key] || [];
            draftFacetState[def.key] = input.checked ? current.concat([input.value]) : current.filter((id) => id !== input.value);
            renderBody();
          });
        });
      }

      // Piloto de redesenho visual (só Equipamento, def.layout === "tiles") — grade de tiles
      // com ícone/label/contagem em vez de checkbox em lista. Mesma lógica de estado de
      // qualquer faceta combineMode "or": sem item "Todos" (nenhum tile marcado = nenhum
      // filtro ativo, igual a "Todos" marcado na versão em lista); marcar/desmarcar um tile
      // só alterna draftFacetState[def.key], reaproveitando computeFacetOptions pra contagem —
      // não recalcula nada que já não existisse.
      function renderTileSectionBody(sectionBody, def, options) {
        const selectedIds = draftFacetState[def.key] || [];
        sectionBody.innerHTML =
          '<div class="filter-tile-grid">' +
          options
            .map(
              (o) =>
                '<button type="button" class="filter-tile' +
                (selectedIds.indexOf(o.tagId) !== -1 ? " is-selected" : "") +
                '" data-value="' +
                o.tagId +
                '">' +
                equipmentTileIconHtml(o.tagId) +
                '<span class="filter-tile__label">' +
                o.tag.label +
                '</span><span class="filter-tile__count">' +
                o.count +
                "</span></button>"
            )
            .join("") +
          "</div>";
        sectionBody.querySelectorAll(".filter-tile").forEach((btn) => {
          btn.addEventListener("click", () => {
            const val = btn.dataset.value;
            const current = draftFacetState[def.key] || [];
            draftFacetState[def.key] = current.indexOf(val) !== -1 ? current.filter((id) => id !== val) : current.concat([val]);
            renderBody();
          });
        });
      }

      function renderGenericSection(def) {
        const options = computeFacetOptions(opts.getUniverse(draftProteinRole), draftFacetState, defs, def);
        const section = document.createElement("div");
        section.className = "filter-section" + (openSectionKey === def.key ? " is-open" : "");
        const summary = sectionSummary(def);
        section.innerHTML =
          '<button type="button" class="filter-section__header">' +
          '<span class="filter-section__label">' +
          def.label +
          '<span class="filter-section__count">(' +
          options.length +
          ")</span></span>" +
          (summary ? '<span class="filter-section__summary">' + summary + "</span>" : "") +
          iconSvg("chevronDown", "filter-section__chevron") +
          "</button>" +
          '<div class="filter-section__body"></div>';
        section.querySelector(".filter-section__header").addEventListener("click", () => toggleSection(def.key));
        const sectionBody = section.querySelector(".filter-section__body");
        if (def.multi && def.combineMode === "or" && def.layout === "tiles") renderTileSectionBody(sectionBody, def, options);
        else if (def.multi && def.combineMode === "or") renderCheckboxSectionBody(sectionBody, def, options);
        else if (def.multi) renderMultiSectionBody(sectionBody, def, options);
        else renderSingleSectionBody(sectionBody, def, options);
        return section;
      }

      function renderProteinRoleSection() {
        const counts = opts.proteinRole.computeCounts(draftFacetState);
        const section = document.createElement("div");
        section.className = "filter-section" + (openSectionKey === "protein-role" ? " is-open" : "");
        const summary = draftProteinRole === "focus" ? "Principal" : draftProteinRole === "secondary" ? "Secundário" : "";
        section.innerHTML =
          '<button type="button" class="filter-section__header">' +
          '<span class="filter-section__label">Papel da proteína</span>' +
          (summary ? '<span class="filter-section__summary">' + summary + "</span>" : "") +
          iconSvg("chevronDown", "filter-section__chevron") +
          "</button>" +
          '<div class="filter-section__body">' +
          '<label class="filter-option"><input type="radio" name="filter-protein-role"' +
          (!draftProteinRole ? " checked" : "") +
          "><span>Tanto faz</span></label>" +
          '<label class="filter-option"><input type="radio" name="filter-protein-role" value="focus"' +
          (draftProteinRole === "focus" ? " checked" : "") +
          "><span>Principal (" +
          counts.focus +
          ")</span></label>" +
          '<label class="filter-option"><input type="radio" name="filter-protein-role" value="secondary"' +
          (draftProteinRole === "secondary" ? " checked" : "") +
          "><span>Secundário (" +
          counts.secondary +
          ")</span></label>" +
          "</div>";
        section.querySelector(".filter-section__header").addEventListener("click", () => toggleSection("protein-role"));
        section.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.addEventListener("change", () => {
            draftProteinRole = input.value || null;
            renderBody();
          });
        });
        return section;
      }

      function renderBody() {
        bodyEl.innerHTML = "";
        defs.forEach((def) => bodyEl.appendChild(renderGenericSection(def)));
        if (opts.proteinRole) bodyEl.appendChild(renderProteinRoleSection());
        renderClearRow();
        renderFooter();
      }

      renderBody();
    }
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
      // hideFromGrupoGrid (Bloco 2, item 2): a coleção não aparece mais na grade do grupo, então
      // "voltar pro grupo" seria um beco sem saída visual — volta pra Home (única entrada real).
      if (collection.hideFromGrupoGrid) Router.toHome();
      else if (grupo) Router.toGrupo(grupo.id);
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
    facetBarEl.className = "filter-trigger-wrap";
    content.appendChild(facetBarEl);

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

    // Botão "Filtros" (com badge) + modal em acordeão (Bloco 3) — substitui a antiga barra de
    // dropdowns sempre-visível E o antigo "Limpar filtros" separado (agora vive dentro do
    // modal). A lógica de cada faceta é a mesma de sempre (matchesGroupedTags/facetStateToTagIds/
    // etc.) — só o CONTÊINER mudou.
    function renderFacets() {
      const facetState = readFacetStateFromTags(selectedFacetTags, GENERIC_FACET_DEFS);
      renderFacetModal(facetBarEl, GENERIC_FACET_DEFS, {
        facetState: facetState,
        getUniverse: (role) => (role === "focus" ? basePrimary : role === "secondary" ? baseRelated : baseAll),
        proteinRole: isProteinRole
          ? {
              value: proteinRole,
              setValue: (v) => {
                proteinRole = v;
              },
              computeCounts: (draftFacetState) => {
                const matchesGeneric = (item) => matchesGroupedTags(item.tags, facetStateToTagIds(draftFacetState, GENERIC_FACET_DEFS));
                return { focus: basePrimary.filter(matchesGeneric).length, secondary: baseRelated.filter(matchesGeneric).length };
              },
            }
          : null,
        countForDraft: (draftFacetState, draftRole) => {
          const draftTags = facetStateToTagIds(draftFacetState, GENERIC_FACET_DEFS);
          const matches = (item) => matchesGroupedTags(item.tags, draftTags);
          const primary = draftTags.length ? basePrimary.filter(matches) : basePrimary;
          const related = draftTags.length ? baseRelated.filter(matches) : baseRelated;
          const all = draftTags.length ? baseAll.filter(matches) : baseAll;
          if (draftRole === "focus") return primary.length;
          if (draftRole === "secondary") return related.length;
          return all.length;
        },
        onApply: () => {
          selectedFacetTags = facetStateToTagIds(facetState, GENERIC_FACET_DEFS);
          ingredientOrFallback = false;
          applyFacets();
          syncUrl();
          renderFacets();
          renderToolbarState();
          renderList();
        },
      });
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
    facetBarEl.className = "filter-trigger-wrap";
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
      renderFacetModal(facetBarEl, GENERIC_FACET_DEFS, {
        facetState: facetState,
        getUniverse: () => facetUniverse(base),
        proteinRole: null,
        countForDraft: (draftFacetState) => facetUniverse(base.concat(facetStateToTagIds(draftFacetState, GENERIC_FACET_DEFS))).length,
        onApply: () => {
          goToTags(base.concat(facetStateToTagIds(facetState, GENERIC_FACET_DEFS)));
        },
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
  function renderPlaceholder(title, desc, extraEl) {
    activeCat = null;
    refreshActiveCounts = null;
    header.innerHTML = "<h2>" + title + "</h2>";
    content.innerHTML = "";
    progressEl.textContent = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = desc;
    content.appendChild(empty);
    if (extraEl) content.appendChild(extraEl);
  }

  // Atribuição obrigatória (licença Icons8) pelos 3 ícones raster de Equipamento no modal de
  // filtros (air-fryer, panela de pressão, churrasqueira) + crédito a SVG Repo pelos outros 4
  // (não exigido pela licença deles, mas recomendado) + linha genérica pros 2 últimos
  // (Processador, Sous Vide — fonte não identificada, sem metadados de autoria no arquivo
  // recebido; tratados como exigindo atribuição por segurança até a origem ser confirmada).
  // Fica em Minhas Receitas por ora — não há rodapé fixo no app pra isso ainda.
  function buildIconCreditsEl() {
    const el = document.createElement("div");
    el.className = "icon-credits";
    el.innerHTML =
      "<p>Ícones de equipamento por " +
      '<a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a> e ' +
      '<a href="https://www.svgrepo.com" target="_blank" rel="noopener noreferrer">SVG Repo</a>. ' +
      "Ícones adicionais de fonte não identificada.</p>";
    return el;
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
    // Modal de filtros aberto sobrevive fora de #recipes-content (ver comentário na declaração
    // de closeActiveFilterModal) — fecha à força antes de renderizar a rota nova, senão fica
    // preso na tela por cima do conteúdo trocado (ex.: botão/gesto voltar do celular).
    if (closeActiveFilterModal) closeActiveFilterModal();
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
      renderPlaceholder("📖 Minhas Receitas", "Em breve: favoritos, quero fazer e histórico, tudo aqui.", buildIconCreditsEl());
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
