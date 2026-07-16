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
    cart: '<path d="M4 6h2l2 11h10l2-8H7"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="16.5" cy="20" r="1.3"/>',
    bowl: '<path d="M4 12a8 8 0 0 0 16 0"/><path d="M4 12h16"/><path d="M8 8c1 1 1 2 0 3"/><path d="M12 7c1 1 1 2 0 3"/><path d="M16 8c1 1 1 2 0 3"/>',
    flame: '<path d="M12 3c2 3 4 5 4 8a4 4 0 1 1-8 0c0-1 .3-2 1-3 .2 1.5 1 2 1.8 2A2 2 0 0 0 13 8c0-2-2-3-1-5Z"/>',
    globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><path d="M12 4c2.5 2.5 2.5 13 0 16"/><path d="M12 4c-2.5 2.5-2.5 13 0 16"/>',
    cupcake: '<path d="M7 11h10l-1.2 7.5A2 2 0 0 1 13.8 20h-3.6a2 2 0 0 1-2-1.5L7 11Z"/><path d="M6 11a6 4 0 0 1 12 0Z"/><path d="M12 3v2.2"/>',
    dots: '<circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/>',
    filter: '<path d="M4 5h16l-6.5 7.5V19l-3 1.6v-8.1Z"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5v4.5l3 2"/>',
    gauge: '<path d="M6 18v-4"/><path d="M12 18V9"/><path d="M18 18V6"/>',
  };
  function iconSvg(key, className) {
    return '<svg class="' + className + '" ' + ICON_SVG_ATTRS + ">" + ICONS[key] + "</svg>";
  }

  // Ícone de coração pro favoritar (docs/DESIGN-TOKENS.md) — usado tanto no botão da tela de
  // receita quanto no card. Não usa o sistema ICON_SVG_ATTRS/ICONS acima porque precisa de 2
  // estados de PREENCHIMENTO (contorno vazio parado, sólido quando favoritado), não só troca
  // de cor — a classe .recipe-heart-icon/.is-favorite no CSS controla isso (fill: none parado,
  // fill: var(--color-accent) quando o ancestral tem .is-favorite).
  const HEART_ICON_SVG =
    '<svg class="recipe-heart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/></svg>';

  // Ícone autoral da aba "Preparos" (panela de cabo único) — arquivo próprio em icons/preparos.svg,
  // sem exigência de atribuição. Não usa o sistema ICON_SVG_ATTRS/ICONS acima (todos stroke-based,
  // viewBox 24x24): este é um ícone de traço preenchido (fill), formato diferente, então vem como
  // markup completo próprio. Embutido como string — mesmo padrão anti-race-condition do
  // EQUIPMENT_SVG_MARKUP — nunca via fetch()/<img src>, pra currentColor herdar a cor do estado da
  // aba (--color-text-disabled parado, --color-accent ativo) sem depender de round-trip nenhum.
  const PREPAROS_ICON_SVG =
    '<svg class="bottom-nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" aria-hidden="true"><path d="M 0 314 L 0 324 L 1 325 L 1 331 L 2 332 L 2 336 L 3 337 L 3 340 L 4 341 L 4 343 L 5 344 L 5 346 L 7 349 L 7 351 L 8 352 L 8 353 L 10 355 L 10 356 L 11 357 L 12 360 L 14 362 L 14 363 L 17 366 L 17 367 L 29 379 L 30 379 L 34 383 L 35 383 L 37 385 L 38 385 L 43 389 L 44 389 L 49 392 L 51 392 L 52 393 L 299 393 L 300 392 L 301 392 L 302 391 L 303 391 L 304 390 L 307 389 L 309 387 L 312 386 L 314 384 L 315 384 L 318 381 L 319 381 L 327 373 L 328 373 L 329 372 L 329 371 L 334 366 L 334 365 L 337 362 L 338 359 L 340 357 L 340 356 L 341 355 L 341 354 L 344 349 L 344 347 L 346 344 L 346 342 L 347 341 L 347 338 L 349 335 L 503 335 L 504 334 L 506 334 L 510 330 L 510 328 L 511 327 L 511 323 L 510 322 L 509 319 L 504 316 L 351 316 L 350 315 L 350 313 L 349 312 L 348 309 L 343 306 L 8 306 L 7 307 L 5 307 L 1 311 L 1 313 Z M 20 326 L 21 325 L 329 325 L 330 326 L 330 329 L 329 330 L 329 333 L 328 334 L 328 337 L 327 338 L 327 339 L 324 344 L 324 346 L 322 348 L 322 349 L 320 351 L 320 352 L 317 355 L 317 356 L 309 364 L 308 364 L 304 368 L 303 368 L 301 370 L 300 370 L 299 371 L 296 372 L 294 374 L 57 374 L 56 373 L 55 373 L 54 372 L 51 371 L 46 367 L 45 367 L 39 361 L 38 361 L 37 360 L 37 359 L 31 353 L 31 352 L 27 347 L 27 346 L 25 343 L 25 341 L 22 336 L 22 333 L 21 332 L 21 329 L 20 328 Z M 251 118 L 244 118 L 243 119 L 242 119 L 238 123 L 238 127 L 237 128 L 237 133 L 236 134 L 236 135 L 234 137 L 234 138 L 223 149 L 223 150 L 219 155 L 219 156 L 216 161 L 216 163 L 215 164 L 215 167 L 214 168 L 214 180 L 215 181 L 215 184 L 216 185 L 216 187 L 217 188 L 217 189 L 218 190 L 219 193 L 221 195 L 221 196 L 224 199 L 224 200 L 234 210 L 234 211 L 236 213 L 236 214 L 237 215 L 237 226 L 236 227 L 236 229 L 233 232 L 233 233 L 222 244 L 222 245 L 218 250 L 218 251 L 217 252 L 217 254 L 215 257 L 215 261 L 214 262 L 214 269 L 215 270 L 215 272 L 217 274 L 217 275 L 218 275 L 221 277 L 227 277 L 232 273 L 232 272 L 233 271 L 233 266 L 234 265 L 234 262 L 235 261 L 235 259 L 240 254 L 240 253 L 249 244 L 249 243 L 252 240 L 252 239 L 254 236 L 254 234 L 255 233 L 255 231 L 256 230 L 256 226 L 257 225 L 257 217 L 256 216 L 256 211 L 255 210 L 255 208 L 254 207 L 254 206 L 253 205 L 252 202 L 250 200 L 250 199 L 247 196 L 247 195 L 237 185 L 237 184 L 235 182 L 235 181 L 234 180 L 234 176 L 233 175 L 233 173 L 234 172 L 234 168 L 235 167 L 236 164 L 247 153 L 247 152 L 250 149 L 250 148 L 252 146 L 252 145 L 255 140 L 255 138 L 256 137 L 256 132 L 257 131 L 257 126 L 256 125 L 256 123 L 255 122 L 255 121 L 254 120 L 253 120 Z M 191 118 L 183 118 L 181 120 L 180 120 L 180 121 L 178 123 L 178 126 L 177 127 L 177 132 L 176 133 L 175 136 L 173 138 L 173 139 L 163 149 L 163 150 L 160 153 L 160 154 L 158 156 L 158 157 L 156 160 L 156 162 L 155 163 L 155 166 L 154 167 L 154 181 L 155 182 L 155 185 L 156 186 L 156 188 L 157 189 L 158 192 L 160 194 L 160 195 L 163 198 L 163 199 L 173 209 L 173 210 L 175 212 L 175 213 L 177 216 L 177 226 L 176 227 L 175 230 L 161 245 L 161 246 L 159 248 L 159 249 L 156 254 L 156 256 L 155 257 L 155 260 L 154 261 L 154 271 L 156 273 L 156 274 L 157 275 L 158 275 L 160 277 L 166 277 L 171 274 L 171 273 L 173 270 L 173 264 L 174 263 L 174 261 L 175 260 L 175 259 L 177 257 L 177 256 L 188 245 L 188 244 L 191 241 L 191 240 L 192 239 L 192 238 L 195 233 L 195 230 L 196 229 L 196 213 L 195 212 L 195 209 L 194 208 L 194 206 L 193 205 L 192 202 L 189 199 L 189 198 L 185 194 L 185 193 L 176 184 L 176 183 L 174 180 L 174 178 L 173 177 L 173 171 L 174 170 L 174 168 L 175 167 L 175 165 L 184 156 L 184 155 L 189 150 L 189 149 L 192 146 L 192 145 L 194 142 L 194 140 L 195 139 L 195 137 L 196 136 L 196 129 L 197 128 L 197 127 L 196 126 L 196 123 Z M 130 118 L 123 118 L 122 119 L 121 119 L 119 121 L 119 122 L 117 125 L 117 131 L 116 132 L 116 134 L 115 135 L 115 136 L 111 140 L 111 141 L 101 151 L 101 152 L 99 154 L 99 155 L 97 157 L 97 158 L 96 159 L 96 161 L 95 162 L 95 165 L 94 166 L 94 173 L 93 174 L 94 175 L 94 182 L 95 183 L 95 186 L 96 187 L 96 188 L 97 189 L 97 190 L 98 191 L 99 194 L 102 197 L 102 198 L 112 208 L 112 209 L 115 212 L 115 213 L 116 214 L 116 216 L 117 217 L 117 224 L 116 225 L 116 227 L 115 228 L 114 231 L 103 242 L 103 243 L 100 246 L 100 247 L 98 249 L 98 250 L 96 253 L 96 255 L 95 256 L 95 258 L 94 259 L 94 271 L 95 272 L 95 273 L 98 276 L 99 276 L 100 277 L 106 277 L 107 276 L 108 276 L 112 272 L 112 269 L 113 268 L 113 263 L 114 262 L 114 260 L 116 258 L 116 257 L 127 246 L 127 245 L 130 242 L 130 241 L 132 239 L 132 238 L 134 235 L 134 233 L 135 232 L 135 229 L 136 228 L 136 214 L 135 213 L 135 210 L 134 209 L 134 207 L 133 206 L 133 205 L 132 204 L 131 201 L 128 198 L 128 197 L 117 186 L 117 185 L 115 183 L 115 182 L 113 179 L 113 169 L 114 168 L 115 165 L 117 163 L 117 162 L 128 151 L 128 150 L 131 147 L 131 146 L 134 141 L 134 139 L 135 138 L 135 135 L 136 134 L 136 124 L 135 123 L 135 122 L 132 119 L 131 119 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>';

  // ---------- Barra de navegação inferior (fixa, 5 abas) ----------
  const BOTTOM_NAV_TABS = [
    { id: "home", label: "Home", icon: "home", go: () => Router.toHome() },
    { id: "pesquisar", label: "Pesquisar", icon: "search", go: () => Router.toBusca([], []) },
    { id: "minhas-receitas", label: "Minhas Receitas", icon: "bookmark", go: () => Router.toMinhasReceitas() },
    { id: "preparos", label: "Preparos", iconHtml: PREPAROS_ICON_SVG, go: () => Router.toPreparos() },
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
        (tab.iconHtml || iconSvg(tab.icon, "bottom-nav__icon")) +
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
  // existente. Busca livre e atalhos de favoritos/histórico saem daqui e migram pra
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
  // layout: "tiles" (piloto de redesenho visual, País e Equipamento por ora) — muda SÓ a
  // apresentação (grade de tiles com ícone/contagem em vez de lista de checkbox); a lógica
  // de estado/combinação continua a mesma de qualquer combineMode "or" (ver
  // renderTileSectionBody, que reaproveita computeFacetOptions sem recalcular nada).
  // tileIcon: função tagId -> HTML do ícone, plugada por faceta (emoji de bandeira em País,
  // SVG/PNG reais em Equipamento) — únicas partes que diferem entre as duas.
  const GENERIC_FACET_DEFS = [
    { key: "country", label: "País", prefix: "country:", multi: true, combineMode: "or", layout: "tiles", tileIcon: countryTileIconHtml },
    { key: "difficulty", label: "Complexidade", prefix: "difficulty:", multi: true, combineMode: "or" },
    { key: "time", label: "Tempo", prefix: "time:", multi: true, combineMode: "or" },
    { key: "equipment", label: "Equipamento", prefix: "equipment:", multi: true, combineMode: "or", layout: "tiles", tileIcon: equipmentTileIconHtml },
    // "Proteína" (protein:) — NÃO confundir com "Papel da proteína" (renderProteinRoleSection,
    // seleção única Principal/Secundário/Tanto faz, só em coleções de proteína). Esta é NOVA:
    // pergunta QUAL proteína (Frango, Boi, Peixe...), disponível em QUALQUER coleção/busca, OR
    // puro entre valores — mesma família de País/Equipamento. 8 valores, grade de tiles, mas
    // SEM ícone nesta rodada (noIconTileIcon sempre devolve "" — só label+contagem, mesmo
    // tratamento que Processador/Sous Vide tinham antes de ganhar ícone real).
    { key: "protein", label: "Proteína", prefix: "protein:", multi: true, combineMode: "or", layout: "tiles", tileIcon: noIconTileIcon },
    // Fase B: "Refeição" (course:, 5 valores) e "Tipo de prato" (dish_type:, 12 valores) —
    // mesma família (OR puro, sem fallback). course: vira grade (poucos valores, mesma regra
    // de sempre), dish_type: fica em lista (muitos valores/textuais) — nenhum ícone novo nesta
    // rodada em nenhuma das duas. "Restrições" (diet:) NÃO entra: cobertura de 24,9% (99/398)
    // e um único valor (diet:vegetariana) — abaixo do limiar combinado com o usuário, fica pro
    // backlog de expansão de dados.
    { key: "course", label: "Refeição", prefix: "course:", multi: true, combineMode: "or", layout: "tiles", tileIcon: noIconTileIcon },
    { key: "dishType", label: "Tipo de prato", prefix: "dish_type:", multi: true, combineMode: "or" },
    // layout: "ingredient-tiles" — piloto próprio (não reaproveita renderTileSectionBody): grade
    // MAIS DENSA que País/Equipamento (mais colunas, tiles menores) pra caber ~30-40 valores em
    // 360-430px, e SÓ substitui o <select> de "+ adicionar" — os chips removíveis dos já
    // selecionados continuam exatamente iguais. combineMode "and" (+ fallback OR ao zerar,
    // intocado) continua sendo a única lógica diferente de todas as outras facetas.
    { key: "ingredient", label: "Ingrediente", prefix: "ingredient:", multi: true, combineMode: "and", layout: "ingredient-tiles" },
  ];

  // Proteína: sem ícone nesta rodada (rodada futura, mesmo tratamento que Processador/Sous
  // Vide tiveram antes de ganhar ícone real) — só label+contagem no tile.
  function noIconTileIcon() {
    return "";
  }

  // Emoji de bandeira pro piloto de tiles de País — caractere Unicode padrão (sem arquivo, sem
  // licença). Não recolore por estado: emoji não herda currentColor, e a borda do tile já
  // indica seleção sozinha (mesmo tratamento dos 3 ícones PNG de Equipamento).
  const COUNTRY_FLAG_EMOJI = {
    "country:franca": "🇫🇷",
    "country:italia": "🇮🇹",
    "country:espanha": "🇪🇸",
    "country:portugal": "🇵🇹",
    "country:japao": "🇯🇵",
    "country:china": "🇨🇳",
    "country:coreia": "🇰🇷",
    "country:tailandia": "🇹🇭",
    "country:india": "🇮🇳",
    "country:mexico": "🇲🇽",
    "country:peru": "🇵🇪",
    "country:alemanha": "🇩🇪",
    "country:austria": "🇦🇹",
    "country:hungria": "🇭🇺",
    "country:grecia": "🇬🇷",
    "country:marrocos": "🇲🇦",
    "country:libano": "🇱🇧",
    "country:eua": "🇺🇸",
    "country:dinamarca": "🇩🇰",
    "country:brasil": "🇧🇷",
  };
  function countryTileIconHtml(tagId) {
    const flag = COUNTRY_FLAG_EMOJI[tagId];
    if (!flag) return "";
    return '<span class="filter-tile__icon filter-tile__icon--emoji" aria-hidden="true">' + flag + "</span>";
  }

  // Emoji por ingrediente pro piloto de tiles de Ingrediente — mesmo raciocínio de País (sem
  // arquivo, sem licença, sem recolor por estado). Peixes com espécie própria mas sem emoji
  // dedicado no Unicode (salmão, robalo, atum, linguado, dourado, anchova, bacalhau, badejo,
  // tilápia) usam 🐟 genérico — aceitável repetir, o label ao lado já diferencia. IDs que
  // existem só como seasoning: (gengibre, curry — ver js/tags.js) NÃO entram aqui: a faceta
  // Ingrediente só lê prefix "ingredient:", então essas duas tags nunca aparecem como opção
  // desta seção, com ou sem emoji. "abobrinha" existe como ingredient: mas não veio na lista
  // original — tratada como SEM ÍCONE, mesmo fallback seguro do Processador/Sous Vide.
  const INGREDIENT_EMOJI = {
    "ingredient:ovo": "🥚",
    "ingredient:tomate": "🍅",
    "ingredient:queijo": "🧀",
    "ingredient:arroz": "🍚",
    "ingredient:batata": "🥔",
    "ingredient:milho": "🌽",
    "ingredient:feijao": "🫘",
    "ingredient:berinjela": "🍆",
    "ingredient:cogumelo": "🍄",
    "ingredient:abobora": "🎃",
    "ingredient:pimentao": "🫑",
    "ingredient:azeitona": "🫒",
    "ingredient:limao": "🍋",
    "ingredient:coco": "🥥",
    "ingredient:castanha": "🌰",
    "ingredient:chocolate": "🍫",
    "ingredient:cafe": "☕",
    "ingredient:vinho": "🍷",
    "ingredient:cerveja": "🍺",
    "ingredient:mel": "🍯",
    "ingredient:espinafre": "🥬",
    "ingredient:ervilha": "🫛",
    "ingredient:amendoim": "🥜",
    "ingredient:brocolis": "🥦",
    "ingredient:cenoura": "🥕",
    "ingredient:pao": "🍞",
    "ingredient:pepino": "🥒",
    "ingredient:camarao": "🦐",
    "ingredient:lula": "🦑",
    "ingredient:polvo": "🐙",
    "ingredient:mexilhao": "🦪",
    "ingredient:lagosta": "🦞",
    "ingredient:ostra": "🦪",
    "ingredient:caranguejo": "🦀",
    "ingredient:salmao": "🐟",
    "ingredient:robalo": "🐟",
    "ingredient:atum": "🐟",
    "ingredient:linguado": "🐟",
    "ingredient:dourado": "🐟",
    "ingredient:anchova": "🐟",
    "ingredient:bacalhau": "🐟",
    "ingredient:badejo": "🐟",
    "ingredient:tilapia": "🐟",
  };
  function ingredientTileIconHtml(tagId) {
    const emoji = INGREDIENT_EMOJI[tagId];
    if (!emoji) return "";
    return '<span class="filter-tile__icon filter-tile__icon--emoji" aria-hidden="true">' + emoji + "</span>";
  }

  // Ícones reais pro piloto de tiles de Equipamento — substituem os emoji provisórios. Arquivos
  // originais ficam em icons/equipment/ (fonte/atribuição), mas o SVG é EMBUTIDO aqui como
  // string, não carregado via fetch() — um fetch é assíncrono, e um usuário abrindo o app e
  // indo direto no filtro (ou qualquer reload+abertura imediata) podia abrir o modal ANTES do
  // fetch terminar, renderizando o tile sem ícone até uma re-renderização tardia (bug real,
  // confirmado por screenshot: só os 3 PNG apareciam, os 4 SVG ficavam em branco). Embutir a
  // string elimina a corrida por completo — mesmo padrão dos outros ícones outline do app
  // (ICONS/ICON_SVG_ATTRS no topo do arquivo), sempre disponível de graça, sem round-trip.
  // fill="#000000" já foi trocado por fill="currentColor" nesses textos (e nos arquivos-fonte)
  // pra recolorir via CSS conforme o estado do tile. Os 3 últimos (air-fryer, panela-de-
  // pressao, churrasqueira) eram PNG (Icons8, filter:invert(1) como aproximação — não
  // recoloriam no estado selecionado) e viraram SVG real autoral nesta rodada: agora os 9
  // valores de Equipamento recolorem igual (--color-text-disabled parado, --color-accent
  // selecionado), sem exceção.
  const EQUIPMENT_SVG_MARKUP = {
    "equipment:forno":
      '<svg fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xml:space="preserve"><g><g><path d="M493.9,13.3h-49.5C444,5.9,437.9,0,430.4,0H292.6c-7.5,0-13.6,5.9-14,13.3h-49.1C229.1,5.9,223,0,215.4,0H77.7 c-7.5,0-13.6,5.9-14,13.3H14.1C6.3,13.3,0,19.7,0,27.5v466.4c0,7.8,6.3,14.1,14.1,14.1h479.8c7.8,0,14.1-6.3,14.1-14.1V27.5 C508,19.7,501.7,13.3,493.9,13.3z M28.2,41.6h451.6v90.3H28.2V41.6z M479.8,479.8H28.2V160.1h451.6V479.8z"/></g></g><g><g><path d="M427.8,196.6H80.2c-7.8,0-14.1,6.3-14.1,14.1V439c0,7.8,6.3,14.1,14.1,14.1h347.5c7.8,0,14.1-6.3,14.1-14.1V210.7 C441.9,203,435.6,196.6,427.8,196.6z M94.3,424.9v-200h319.3v200H94.3z"/></g></g><g><g><path d="M107.5,72.8H96.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C121.6,79.1,115.3,72.8,107.5,72.8z"/></g></g><g><g><path d="M208.8,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C222.9,79.1,216.6,72.8,208.8,72.8z"/></g></g><g><g><path d="M310.1,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C324.2,79.1,317.9,72.8,310.1,72.8z"/></g></g><g><g><path d="M411.3,72.8h-10.9c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h10.9c7.8,0,14.1-6.3,14.1-14.1 C425.4,79.1,419.1,72.8,411.3,72.8z"/></g></g><g><g><path d="M295.1,246.6h-82.2c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h82.2c7.8,0,14.1-6.3,14.1-14.1 C309.2,252.9,302.9,246.6,295.1,246.6z"/></g></g></svg>',
    "equipment:liquidificador":
      '<svg fill="currentColor" width="800px" height="800px" viewBox="-18.49 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 85.89 122.88" xml:space="preserve"><g><path d="M10.36,23.42h53.68c0.07,0,0.15,0,0.24,0.01c0.68,0.06,1.31,0.36,1.78,0.82c0.5,0.49,0.82,1.16,0.82,1.91 c0,0.07,0,0.15-0.01,0.22l0,0.04L66.38,32h17.96c0.86,0,1.55,0.69,1.55,1.55c0,0.06,0,0.13-0.01,0.19 c-0.44,11-2.54,19.75-6.38,26.12c-3.82,6.35-9.31,10.35-16.55,11.9l-1.4,16.28c-0.06,0.73-0.38,1.4-0.86,1.88 c-0.04,0.04-0.08,0.08-0.13,0.11c-0.49,0.44-1.12,0.7-1.83,0.7H15.02c-0.77,0-1.45-0.31-1.96-0.82l0,0 c-0.49-0.49-0.8-1.16-0.86-1.9L7.54,26.37c-0.01-0.08-0.01-0.15-0.01-0.2c0-0.75,0.32-1.42,0.82-1.92c0.47-0.46,1.11-0.77,1.8-0.82 C10.24,23.43,10.31,23.42,10.36,23.42L10.36,23.42z M13.69,103l0.12-5.43c0.01-0.85,0.7-1.52,1.55-1.52v-0.01h44.09 c0.86,0,1.55,0.69,1.55,1.55v5.43l13.1,17.38c0.52,0.68,0.38,1.65-0.3,2.17c-0.28,0.21-0.61,0.31-0.93,0.31v0H1.55 c-0.86,0-1.55-0.69-1.55-1.55c0-0.41,0.16-0.79,0.43-1.07L13.69,103L13.69,103z M37.21,101.83c3.14,0,5.69,2.55,5.69,5.69 c0,3.14-2.55,5.69-5.69,5.69c-3.14,0-5.69-2.55-5.69-5.69C31.52,104.38,34.07,101.83,37.21,101.83L37.21,101.83z M16.88,99.14 l-0.11,4.42h0c0,0.32-0.11,0.64-0.32,0.92L4.69,119.78h65.06l-11.49-15.25c-0.23-0.27-0.36-0.62-0.36-1v-4.39H16.88L16.88,99.14z M6.72,11.4h26.99c-1.71-1.1-2.85-2.41-2.85-5.21c0-2.8,2.77-6.19,6.19-6.19c3.42,0,6.19,3.39,6.19,6.19c0,2.8-1.14,4.11-2.85,5.21 h27.3c0.47,0,0.86,0.39,0.86,0.86v6.08c0,0.47-0.39,0.86-0.86,0.86H6.72c-0.47,0-0.86-0.39-0.86-0.86v-6.08 C5.86,11.79,6.25,11.4,6.72,11.4L6.72,11.4z M66.12,36.09l-2.88,31.44c15.25-3.88,18.53-17.24,19.31-31.44H66.12L66.12,36.09z M31.81,65.77c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55 c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,65.77z M31.81,38c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31 c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,38z M31.81,51.88c-0.86,0-1.55-0.69-1.55-1.55 c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81L31.81,51.88z M31.81,79.65 c-0.86,0-1.55-0.69-1.55-1.55c0-0.86,0.69-1.55,1.55-1.55h11.31c0.86,0,1.55,0.69,1.55,1.55c0,0.86-0.69,1.55-1.55,1.55H31.81 L31.81,79.65z M63.74,26.78H10.66l4.61,60.24h43.2L63.74,26.78L63.74,26.78z M10.63,26.39l0,0.02l0,0L10.63,26.39L10.63,26.39z"/></g></svg>',
    "equipment:batedeira":
      '<svg fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><path d="M490.667,170.667c11.782,0,21.333-9.551,21.333-21.333v-128C512,9.551,502.449,0,490.667,0H21.333 C9.551,0,0,9.551,0,21.333v469.333C0,502.449,9.551,512,21.333,512h469.333c11.782,0,21.333-9.551,21.333-21.333v-85.333 c0-11.782-9.551-21.333-21.333-21.333H415.39c20.274-22.648,32.61-52.55,32.61-85.333c0-11.782-9.551-21.333-21.333-21.333 h-2.132c-8.475-41.82-41.382-74.726-83.201-83.201v-23.465H490.667z M469.333,469.333H42.667V42.667h426.667V128H106.667 c-11.782,0-21.333,9.551-21.333,21.333v256c0,11.782,9.551,21.333,21.333,21.333h362.667V469.333z M298.667,277.333h-39.02 c6.42-18.199,20.821-32.6,39.02-39.02V277.333z M237.356,320h165.287c-9.476,36.8-42.89,64-82.644,64 C280.247,384,246.832,356.8,237.356,320z M380.353,277.333h-39.02v-39.02C359.533,244.733,373.933,259.134,380.353,277.333z M298.667,194.132c-41.82,8.475-74.726,41.382-83.201,83.201h-2.132c-11.782,0-21.333,9.551-21.333,21.333 c0,32.783,12.336,62.686,32.61,85.333H128V170.667h170.667V194.132z"/><path d="M149.333,106.667c11.776,0,21.333-9.557,21.333-21.333S161.109,64,149.333,64S128,73.557,128,85.333 S137.557,106.667,149.333,106.667z"/><path d="M234.667,106.667c11.776,0,21.333-9.557,21.333-21.333S246.443,64,234.667,64s-21.333,9.557-21.333,21.333 S222.891,106.667,234.667,106.667z"/></g></g></g></svg>',
    "equipment:microondas":
      '<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M3 8C1.355469 8 0 9.355469 0 11L0 39C0 40.644531 1.355469 42 3 42L5 42L5 43C5 44.09375 5.90625 45 7 45L10 45C11.09375 45 12 44.09375 12 43L12 42L38 42L38 43C38 44.09375 38.90625 45 40 45L43 45C44.09375 45 45 44.09375 45 43L45 42L47 42C48.644531 42 50 40.644531 50 39L50 11C50 9.355469 48.644531 8 47 8 Z M 3 10L47 10C47.5625 10 48 10.4375 48 11L48 39C48 39.5625 47.5625 40 47 40L39.1875 40C39.054688 39.972656 38.914063 39.972656 38.78125 40L6.1875 40C6.054688 39.972656 5.914063 39.972656 5.78125 40L3 40C2.4375 40 2 39.5625 2 39L2 11C2 10.4375 2.4375 10 3 10 Z M 5 13L5 37L40 37L40 13 Z M 7 15L38 15L38 35L7 35 Z M 44 16C42.894531 16 42 16.894531 42 18C42 19.105469 42.894531 20 44 20C45.105469 20 46 19.105469 46 18C46 16.894531 45.105469 16 44 16 Z M 34.15625 19.9375C33.957031 19.933594 33.761719 19.988281 33.59375 20.09375C33.59375 20.09375 28.964844 22 26.125 22C24.707031 22 23.75 21.59375 22.59375 21.09375C21.4375 20.59375 20.066406 20 18.21875 20C14.523438 20 10.5625 22.09375 10.5625 22.09375C10.0625 22.335938 9.851563 22.9375 10.09375 23.4375C10.335938 23.9375 10.9375 24.148438 11.4375 23.90625C11.4375 23.90625 15.332031 22 18.21875 22C19.664063 22 20.628906 22.40625 21.78125 22.90625C22.933594 23.40625 24.296875 24 26.125 24C29.785156 24 34.40625 21.90625 34.40625 21.90625C34.894531 21.78125 35.214844 21.3125 35.148438 20.8125C35.085938 20.3125 34.660156 19.9375 34.15625 19.9375 Z M 44 23C42.894531 23 42 23.894531 42 25C42 26.105469 42.894531 27 44 27C45.105469 27 46 26.105469 46 25C46 23.894531 45.105469 23 44 23 Z M 34.15625 25.9375C33.957031 25.933594 33.761719 25.988281 33.59375 26.09375C33.59375 26.09375 28.964844 28 26.125 28C24.707031 28 23.75 27.59375 22.59375 27.09375C21.4375 26.59375 20.066406 26 18.21875 26C14.523438 26 10.5625 28.09375 10.5625 28.09375C10.0625 28.335938 9.851563 28.9375 10.09375 29.4375C10.335938 29.9375 10.9375 30.148438 11.4375 29.90625C11.4375 29.90625 15.332031 28 18.21875 28C19.664063 28 20.628906 28.40625 21.78125 28.90625C22.933594 29.40625 24.296875 30 26.125 30C29.785156 30 34.40625 27.90625 34.40625 27.90625C34.894531 27.78125 35.214844 27.3125 35.148438 26.8125C35.085938 26.3125 34.660156 25.9375 34.15625 25.9375 Z M 44 30C42.894531 30 42 30.894531 42 32C42 33.105469 42.894531 34 44 34C45.105469 34 46 33.105469 46 32C46 30.894531 45.105469 30 44 30 Z M 7 42L10 42L10 43L7 43 Z M 40 42L43 42L43 43L40 43Z"/></svg>',
    // Autoral (confirmado com o usuário) — sem fonte externa a creditar em buildIconCreditsEl().
    // fill="currentColor" já vinha assim no arquivo original, sem edição.
    "equipment:processador":
      '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none"><title>Ícone vetorial</title><path d="M 173 0 L 173 15 L 174 16 L 189 16 L 190 17 L 190 82 L 187 84 L 180 84 L 179 85 L 172 85 L 171 86 L 167 86 L 166 87 L 162 87 L 161 88 L 157 88 L 156 89 L 153 89 L 152 90 L 150 90 L 149 91 L 146 91 L 145 92 L 143 92 L 142 93 L 140 93 L 139 94 L 137 94 L 136 95 L 134 95 L 131 97 L 129 97 L 126 99 L 124 99 L 123 100 L 122 100 L 121 101 L 118 102 L 115 105 L 114 105 L 108 111 L 108 112 L 105 115 L 105 116 L 102 121 L 102 123 L 101 124 L 101 126 L 100 127 L 100 131 L 99 132 L 99 296 L 98 297 L 98 299 L 97 300 L 97 302 L 96 303 L 96 305 L 95 306 L 95 308 L 94 309 L 94 311 L 93 312 L 93 314 L 92 315 L 92 318 L 91 319 L 91 321 L 90 322 L 90 325 L 89 326 L 89 329 L 88 330 L 88 334 L 87 335 L 87 339 L 86 340 L 86 345 L 85 346 L 85 352 L 84 353 L 84 361 L 83 362 L 83 486 L 98 486 L 99 487 L 99 511 L 148 511 L 148 487 L 149 486 L 362 486 L 363 487 L 363 511 L 412 511 L 412 487 L 413 486 L 428 486 L 428 362 L 427 361 L 427 353 L 426 352 L 426 346 L 425 345 L 425 340 L 424 339 L 424 335 L 423 334 L 423 330 L 422 329 L 422 326 L 421 325 L 421 322 L 420 321 L 420 319 L 419 318 L 419 315 L 418 314 L 418 312 L 417 311 L 417 309 L 416 308 L 416 306 L 415 305 L 415 303 L 414 302 L 414 300 L 413 299 L 413 297 L 412 296 L 412 132 L 411 131 L 411 127 L 410 126 L 410 124 L 409 123 L 409 121 L 408 120 L 408 119 L 407 118 L 406 115 L 403 112 L 403 111 L 397 105 L 396 105 L 393 102 L 392 102 L 387 99 L 385 99 L 384 98 L 383 98 L 382 97 L 380 97 L 377 95 L 375 95 L 374 94 L 372 94 L 371 93 L 369 93 L 368 92 L 366 92 L 365 91 L 362 91 L 361 90 L 359 90 L 358 89 L 355 89 L 354 88 L 350 88 L 349 87 L 345 87 L 344 86 L 340 86 L 339 85 L 332 85 L 331 84 L 324 84 L 321 82 L 321 17 L 322 16 L 337 16 L 338 15 L 338 0 Z M 379 487 L 380 486 L 395 486 L 396 487 L 396 494 L 395 495 L 380 495 L 379 494 Z M 115 487 L 116 486 L 131 486 L 132 487 L 132 494 L 131 495 L 116 495 L 115 494 Z M 111 307 L 113 305 L 398 305 L 400 307 L 400 309 L 401 310 L 401 312 L 402 313 L 402 315 L 403 316 L 403 319 L 404 320 L 404 322 L 405 323 L 405 325 L 406 326 L 406 330 L 407 331 L 407 334 L 408 335 L 408 339 L 409 340 L 409 343 L 410 344 L 410 351 L 411 352 L 411 358 L 412 359 L 412 373 L 413 374 L 413 437 L 412 438 L 322 438 L 322 453 L 412 453 L 413 454 L 413 470 L 412 471 L 99 471 L 98 470 L 98 454 L 99 453 L 189 453 L 189 438 L 99 438 L 98 437 L 98 374 L 99 373 L 99 359 L 100 358 L 100 352 L 101 351 L 101 344 L 102 343 L 102 340 L 103 339 L 103 335 L 104 334 L 104 331 L 105 330 L 105 326 L 106 325 L 106 323 L 107 322 L 107 320 L 108 319 L 108 316 L 109 315 L 109 313 L 110 312 L 110 310 L 111 309 Z M 249 322 L 248 323 L 242 323 L 241 324 L 238 324 L 237 325 L 235 325 L 234 326 L 232 326 L 231 327 L 230 327 L 229 328 L 228 328 L 227 329 L 226 329 L 225 330 L 222 331 L 220 333 L 219 333 L 217 335 L 216 335 L 207 343 L 207 344 L 203 348 L 203 349 L 200 352 L 200 353 L 199 354 L 199 355 L 198 356 L 198 357 L 197 358 L 197 359 L 194 364 L 194 366 L 193 367 L 193 369 L 192 370 L 192 373 L 191 374 L 191 379 L 190 380 L 190 395 L 191 396 L 191 401 L 192 402 L 192 405 L 193 406 L 193 408 L 194 409 L 194 411 L 195 412 L 195 414 L 196 415 L 196 416 L 197 417 L 198 420 L 200 422 L 200 423 L 202 425 L 202 426 L 205 429 L 205 430 L 213 438 L 214 438 L 217 441 L 218 441 L 223 445 L 224 445 L 229 448 L 231 448 L 234 450 L 236 450 L 237 451 L 240 451 L 241 452 L 246 452 L 247 453 L 264 453 L 265 452 L 270 452 L 271 451 L 274 451 L 275 450 L 277 450 L 280 448 L 282 448 L 283 447 L 284 447 L 285 446 L 288 445 L 290 443 L 291 443 L 293 441 L 294 441 L 297 438 L 298 438 L 306 430 L 306 429 L 309 426 L 309 425 L 313 420 L 313 419 L 316 414 L 316 412 L 317 411 L 317 409 L 318 408 L 318 406 L 319 405 L 319 402 L 320 401 L 320 396 L 321 395 L 321 380 L 320 379 L 320 374 L 319 373 L 319 370 L 318 369 L 318 367 L 317 366 L 317 364 L 316 363 L 316 362 L 315 361 L 315 360 L 314 359 L 314 358 L 313 357 L 313 356 L 312 355 L 311 352 L 308 349 L 308 348 L 304 344 L 304 343 L 300 339 L 299 339 L 295 335 L 294 335 L 289 331 L 288 331 L 287 330 L 286 330 L 285 329 L 284 329 L 279 326 L 277 326 L 276 325 L 274 325 L 273 324 L 270 324 L 269 323 L 263 323 L 262 322 Z M 268 339 L 269 340 L 272 340 L 273 341 L 274 341 L 275 342 L 276 342 L 277 343 L 278 343 L 279 344 L 282 345 L 285 348 L 286 348 L 295 357 L 295 358 L 298 361 L 298 362 L 299 363 L 299 364 L 300 365 L 300 366 L 303 371 L 303 374 L 304 375 L 304 377 L 305 378 L 305 386 L 306 387 L 306 388 L 305 389 L 305 397 L 304 398 L 304 400 L 303 401 L 303 404 L 300 409 L 300 411 L 299 412 L 299 413 L 296 416 L 296 417 L 285 428 L 284 428 L 279 432 L 278 432 L 277 433 L 275 433 L 272 435 L 270 435 L 269 436 L 266 436 L 265 437 L 264 437 L 263 436 L 263 340 L 264 339 Z M 243 339 L 247 339 L 248 340 L 248 436 L 247 437 L 246 437 L 245 436 L 242 436 L 241 435 L 239 435 L 236 433 L 234 433 L 233 432 L 232 432 L 230 430 L 229 430 L 227 428 L 226 428 L 215 417 L 215 416 L 211 411 L 211 409 L 208 404 L 208 401 L 207 400 L 207 398 L 206 397 L 206 378 L 207 377 L 207 375 L 208 374 L 208 371 L 209 370 L 209 369 L 210 368 L 210 367 L 211 366 L 211 365 L 212 364 L 213 361 L 216 358 L 216 357 L 225 348 L 226 348 L 231 344 L 232 344 L 237 341 L 239 341 L 240 340 L 242 340 Z M 230 141 L 232 139 L 279 139 L 281 141 L 281 181 L 280 182 L 231 182 L 230 181 Z M 115 140 L 116 139 L 213 139 L 215 141 L 215 197 L 296 197 L 296 141 L 298 139 L 395 139 L 396 140 L 396 288 L 395 289 L 116 289 L 115 288 Z M 306 256 L 306 272 L 370 272 L 371 271 L 371 256 Z M 223 256 L 223 272 L 288 272 L 288 256 Z M 140 256 L 140 271 L 141 272 L 205 272 L 205 256 Z M 264 231 L 264 247 L 329 247 L 329 231 Z M 182 231 L 182 247 L 247 247 L 247 231 Z M 296 99 L 297 98 L 313 98 L 314 99 L 327 99 L 328 100 L 334 100 L 335 101 L 340 101 L 341 102 L 345 102 L 346 103 L 349 103 L 350 104 L 353 104 L 354 105 L 357 105 L 358 106 L 361 106 L 362 107 L 364 107 L 365 108 L 367 108 L 370 110 L 372 110 L 373 111 L 375 111 L 378 113 L 380 113 L 381 114 L 384 115 L 386 117 L 387 117 L 391 121 L 391 122 L 392 123 L 391 124 L 297 124 L 296 123 Z M 230 99 L 231 98 L 280 98 L 281 99 L 281 123 L 280 124 L 231 124 L 230 123 Z M 215 99 L 215 123 L 214 124 L 120 124 L 119 123 L 120 122 L 120 121 L 124 117 L 125 117 L 127 115 L 128 115 L 131 113 L 133 113 L 136 111 L 138 111 L 139 110 L 141 110 L 144 108 L 146 108 L 147 107 L 149 107 L 150 106 L 153 106 L 154 105 L 157 105 L 158 104 L 161 104 L 162 103 L 165 103 L 166 102 L 170 102 L 171 101 L 176 101 L 177 100 L 183 100 L 184 99 L 197 99 L 198 98 L 214 98 Z M 205 17 L 206 16 L 305 16 L 306 17 L 306 81 L 304 83 L 207 83 L 205 81 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "equipment:sous-vide":
      '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none"><title>Ícone vetorial</title><path d="M 216 1 L 215 2 L 213 2 L 212 3 L 210 3 L 209 4 L 208 4 L 206 6 L 203 7 L 193 17 L 193 18 L 191 20 L 191 21 L 189 24 L 189 26 L 187 29 L 187 33 L 186 34 L 186 93 L 187 94 L 187 97 L 188 98 L 188 100 L 189 101 L 189 102 L 190 103 L 190 104 L 191 105 L 192 108 L 195 111 L 195 112 L 200 117 L 201 117 L 202 118 L 202 220 L 201 221 L 177 221 L 176 222 L 170 222 L 169 223 L 166 223 L 163 225 L 161 225 L 160 226 L 159 226 L 158 227 L 157 227 L 156 228 L 153 229 L 150 232 L 149 232 L 141 240 L 141 241 L 138 244 L 138 245 L 137 246 L 137 247 L 136 248 L 136 249 L 133 254 L 133 256 L 132 257 L 132 260 L 131 261 L 131 267 L 130 268 L 130 452 L 159 452 L 159 325 L 160 324 L 214 324 L 215 325 L 215 463 L 216 464 L 216 471 L 217 472 L 217 475 L 218 476 L 218 479 L 220 482 L 220 484 L 221 485 L 221 486 L 223 488 L 223 489 L 224 490 L 224 491 L 226 493 L 226 494 L 230 498 L 230 499 L 235 504 L 236 504 L 241 509 L 242 509 L 244 511 L 323 511 L 325 509 L 326 509 L 330 505 L 331 505 L 337 499 L 337 498 L 340 495 L 340 494 L 344 489 L 344 488 L 346 485 L 346 483 L 348 480 L 348 478 L 349 477 L 349 474 L 350 473 L 350 469 L 351 468 L 351 325 L 352 324 L 364 324 L 364 119 L 373 110 L 373 109 L 375 107 L 375 106 L 378 101 L 378 99 L 379 98 L 379 96 L 380 95 L 380 90 L 381 89 L 381 37 L 380 36 L 380 32 L 379 31 L 379 28 L 378 27 L 378 25 L 377 24 L 376 21 L 374 19 L 374 18 L 372 16 L 372 15 L 366 9 L 365 9 L 362 6 L 361 6 L 360 5 L 359 5 L 354 2 L 351 2 L 350 1 L 346 1 L 345 0 L 221 0 L 220 1 Z M 246 324 L 321 324 L 322 325 L 322 465 L 321 466 L 321 469 L 320 470 L 320 472 L 319 473 L 319 474 L 317 476 L 317 477 L 312 482 L 254 482 L 251 479 L 251 478 L 248 475 L 248 474 L 247 473 L 247 471 L 246 470 L 246 468 L 245 467 L 245 463 L 244 462 L 244 326 Z M 231 252 L 233 250 L 334 250 L 335 251 L 335 294 L 334 295 L 232 295 L 231 294 Z M 167 255 L 168 255 L 170 253 L 171 253 L 174 251 L 177 251 L 178 250 L 201 250 L 202 251 L 202 294 L 201 295 L 160 295 L 159 294 L 159 269 L 160 268 L 160 265 L 161 264 L 162 261 L 164 259 L 164 258 Z M 231 128 L 233 126 L 334 126 L 335 127 L 335 220 L 334 221 L 299 221 L 298 220 L 298 160 L 269 160 L 269 220 L 268 221 L 232 221 L 231 220 Z M 215 37 L 216 36 L 216 35 L 220 31 L 221 31 L 224 29 L 343 29 L 349 33 L 349 34 L 351 36 L 351 38 L 352 39 L 352 87 L 351 88 L 351 90 L 350 91 L 350 92 L 346 96 L 345 96 L 344 97 L 223 97 L 222 96 L 221 96 L 216 91 L 216 90 L 215 89 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "equipment:churrasqueira":
      '<svg xmlns="http://www.w3.org/2000/svg"     width="512" height="512" viewBox="0 0 512 512"     fill="none">  <title>Ícone vetorial</title>  <path d="M 362 132 L 361 133 L 358 134 L 357 135 L 357 136 L 355 138 L 355 139 L 352 144 L 352 149 L 351 150 L 351 151 L 352 152 L 352 157 L 353 158 L 353 160 L 354 161 L 354 162 L 356 164 L 356 165 L 359 168 L 359 169 L 361 172 L 361 176 L 360 177 L 360 178 L 358 180 L 358 181 L 356 184 L 356 186 L 357 187 L 357 189 L 360 192 L 366 192 L 368 190 L 369 190 L 369 189 L 372 186 L 372 185 L 373 184 L 373 182 L 374 181 L 374 179 L 375 178 L 375 170 L 374 169 L 374 166 L 373 165 L 373 164 L 372 163 L 371 160 L 367 156 L 367 155 L 366 154 L 366 152 L 365 151 L 366 150 L 366 147 L 370 142 L 370 137 L 369 136 L 369 135 L 367 133 L 366 133 L 365 132 Z M 325 132 L 320 135 L 320 136 L 318 138 L 318 139 L 316 142 L 316 144 L 315 145 L 315 157 L 316 158 L 316 160 L 318 162 L 319 165 L 322 168 L 322 169 L 324 171 L 324 176 L 323 177 L 322 180 L 320 182 L 320 184 L 319 185 L 319 186 L 320 187 L 320 189 L 322 191 L 323 191 L 324 192 L 329 192 L 332 190 L 332 189 L 335 186 L 335 185 L 337 182 L 337 179 L 338 178 L 338 169 L 337 168 L 337 166 L 336 165 L 336 164 L 335 163 L 334 160 L 330 156 L 330 155 L 329 154 L 329 147 L 333 142 L 333 136 L 330 133 L 329 133 L 328 132 Z M 288 132 L 287 133 L 284 134 L 284 135 L 281 138 L 281 139 L 279 142 L 279 144 L 278 145 L 278 156 L 279 157 L 279 159 L 280 160 L 280 161 L 281 162 L 282 165 L 286 169 L 286 170 L 287 171 L 287 176 L 286 177 L 285 180 L 283 182 L 283 184 L 282 185 L 282 186 L 283 187 L 283 189 L 285 191 L 286 191 L 287 192 L 292 192 L 293 191 L 294 191 L 296 189 L 296 188 L 298 186 L 298 185 L 300 182 L 300 180 L 301 179 L 301 169 L 300 168 L 300 166 L 299 165 L 299 164 L 298 163 L 297 160 L 294 157 L 294 156 L 292 154 L 292 147 L 296 142 L 296 136 L 293 133 L 292 133 L 291 132 Z M 157 28 L 155 30 L 154 30 L 122 62 L 122 63 L 120 65 L 120 66 L 119 67 L 119 69 L 118 70 L 118 76 L 119 77 L 119 79 L 120 80 L 121 83 L 129 91 L 129 92 L 112 109 L 112 110 L 110 112 L 110 113 L 107 116 L 106 119 L 104 121 L 104 122 L 103 123 L 103 124 L 102 125 L 102 126 L 101 127 L 101 128 L 98 133 L 98 135 L 97 136 L 97 138 L 96 139 L 96 141 L 95 142 L 95 145 L 94 146 L 94 149 L 93 150 L 93 155 L 92 156 L 92 166 L 91 167 L 91 169 L 92 170 L 92 183 L 93 184 L 93 188 L 94 189 L 94 193 L 95 194 L 95 196 L 96 197 L 96 199 L 97 200 L 97 202 L 98 203 L 98 205 L 99 206 L 99 207 L 100 208 L 100 210 L 101 211 L 102 214 L 104 216 L 105 219 L 107 221 L 107 222 L 109 224 L 109 225 L 111 227 L 111 228 L 116 233 L 116 234 L 117 235 L 116 236 L 116 238 L 115 239 L 115 242 L 114 243 L 114 251 L 115 252 L 115 255 L 116 256 L 117 259 L 119 261 L 119 262 L 124 267 L 125 267 L 126 268 L 127 268 L 132 271 L 132 274 L 131 275 L 101 275 L 100 276 L 97 276 L 96 277 L 93 278 L 87 284 L 87 285 L 84 290 L 84 301 L 85 302 L 85 304 L 86 305 L 86 306 L 89 309 L 89 310 L 90 311 L 91 311 L 93 313 L 94 313 L 97 315 L 99 315 L 100 316 L 145 316 L 147 318 L 147 319 L 149 321 L 149 322 L 151 324 L 151 325 L 155 329 L 155 330 L 164 339 L 165 339 L 170 344 L 171 344 L 176 348 L 179 349 L 181 351 L 182 351 L 183 352 L 184 352 L 189 355 L 191 355 L 194 357 L 196 357 L 197 358 L 199 358 L 202 360 L 202 361 L 201 362 L 201 364 L 200 365 L 200 368 L 199 369 L 199 372 L 198 373 L 198 376 L 197 377 L 197 380 L 196 381 L 196 384 L 195 385 L 195 388 L 194 389 L 194 392 L 193 393 L 193 395 L 192 396 L 192 399 L 191 400 L 191 403 L 190 404 L 190 407 L 189 408 L 189 411 L 188 412 L 188 415 L 187 416 L 187 419 L 186 420 L 186 423 L 185 424 L 185 426 L 184 427 L 184 430 L 183 431 L 183 434 L 182 435 L 182 438 L 181 439 L 181 442 L 180 443 L 180 446 L 179 447 L 179 453 L 181 455 L 181 456 L 182 456 L 183 457 L 188 457 L 189 456 L 190 456 L 192 454 L 192 452 L 193 451 L 193 449 L 194 448 L 194 445 L 195 444 L 195 441 L 196 440 L 196 437 L 197 436 L 197 433 L 198 432 L 198 429 L 199 428 L 199 425 L 200 424 L 200 422 L 201 421 L 201 418 L 202 417 L 202 414 L 203 413 L 203 410 L 204 409 L 204 406 L 205 405 L 205 402 L 206 401 L 206 398 L 207 397 L 207 394 L 208 393 L 208 391 L 209 390 L 209 387 L 210 386 L 210 383 L 211 382 L 211 379 L 212 378 L 212 375 L 213 374 L 213 371 L 214 370 L 214 367 L 215 366 L 215 364 L 217 362 L 222 362 L 223 363 L 232 363 L 233 364 L 233 366 L 232 367 L 232 370 L 231 371 L 231 373 L 230 374 L 230 377 L 229 378 L 229 381 L 228 382 L 228 385 L 227 386 L 227 389 L 226 390 L 226 393 L 225 394 L 225 397 L 224 398 L 224 401 L 223 402 L 223 404 L 222 405 L 222 408 L 221 409 L 221 412 L 220 413 L 220 416 L 219 417 L 219 420 L 218 421 L 218 424 L 217 425 L 217 428 L 216 429 L 216 432 L 215 433 L 215 435 L 214 436 L 214 439 L 213 440 L 213 443 L 212 444 L 212 447 L 211 448 L 211 451 L 210 452 L 210 455 L 209 456 L 209 459 L 208 460 L 208 463 L 207 464 L 207 466 L 206 467 L 206 470 L 205 471 L 205 474 L 204 475 L 204 478 L 203 479 L 203 482 L 202 483 L 202 486 L 201 487 L 201 490 L 200 491 L 200 492 L 196 496 L 195 496 L 194 497 L 190 497 L 189 496 L 188 496 L 184 492 L 184 490 L 183 489 L 184 488 L 184 484 L 185 483 L 185 480 L 186 479 L 186 476 L 187 475 L 187 472 L 186 471 L 186 469 L 184 467 L 183 467 L 182 466 L 178 466 L 177 467 L 176 467 L 174 469 L 174 470 L 173 471 L 173 473 L 172 474 L 172 477 L 171 478 L 171 481 L 170 482 L 170 486 L 169 487 L 169 488 L 170 489 L 170 495 L 171 496 L 171 497 L 172 498 L 173 501 L 179 507 L 180 507 L 182 509 L 184 509 L 185 510 L 188 510 L 189 511 L 196 511 L 197 510 L 200 510 L 201 509 L 204 508 L 207 505 L 208 505 L 209 504 L 209 503 L 211 501 L 211 500 L 213 498 L 213 496 L 214 495 L 214 493 L 215 492 L 215 489 L 216 488 L 216 485 L 217 484 L 217 481 L 218 480 L 218 477 L 219 476 L 219 473 L 220 472 L 220 469 L 221 468 L 221 465 L 222 464 L 222 462 L 223 461 L 223 458 L 224 457 L 224 454 L 226 451 L 333 451 L 335 453 L 335 456 L 336 457 L 336 460 L 337 461 L 337 466 L 336 467 L 336 469 L 335 470 L 335 472 L 334 473 L 334 485 L 335 486 L 335 489 L 336 490 L 336 492 L 338 494 L 339 497 L 342 500 L 342 501 L 344 503 L 345 503 L 348 506 L 349 506 L 354 509 L 356 509 L 357 510 L 360 510 L 361 511 L 370 511 L 371 510 L 374 510 L 375 509 L 377 509 L 378 508 L 379 508 L 380 507 L 383 506 L 386 503 L 387 503 L 389 501 L 389 500 L 392 497 L 393 494 L 395 492 L 395 490 L 396 489 L 396 486 L 397 485 L 397 473 L 396 472 L 396 470 L 395 469 L 395 467 L 394 466 L 393 463 L 391 461 L 391 460 L 385 454 L 384 454 L 381 451 L 381 450 L 380 449 L 380 446 L 379 445 L 379 442 L 378 441 L 378 438 L 377 437 L 377 434 L 376 433 L 376 430 L 375 429 L 375 426 L 374 425 L 374 423 L 373 422 L 373 419 L 372 418 L 372 415 L 371 414 L 371 411 L 370 410 L 370 407 L 369 406 L 369 403 L 368 402 L 368 399 L 367 398 L 367 396 L 366 395 L 366 392 L 365 391 L 365 388 L 364 387 L 364 384 L 363 383 L 363 380 L 362 379 L 362 376 L 361 375 L 361 372 L 360 371 L 360 369 L 359 368 L 359 365 L 358 364 L 358 361 L 357 360 L 360 358 L 362 358 L 363 357 L 365 357 L 366 356 L 368 356 L 369 355 L 370 355 L 371 354 L 372 354 L 373 353 L 374 353 L 375 352 L 376 352 L 377 351 L 380 350 L 382 348 L 383 348 L 385 346 L 386 346 L 388 344 L 389 344 L 393 340 L 394 340 L 405 329 L 405 328 L 411 321 L 411 320 L 413 318 L 414 315 L 416 313 L 416 312 L 417 311 L 417 309 L 418 308 L 418 307 L 421 302 L 421 300 L 422 299 L 422 297 L 423 296 L 423 294 L 424 293 L 424 291 L 425 290 L 425 285 L 426 284 L 426 280 L 427 279 L 427 251 L 426 250 L 426 248 L 424 246 L 424 245 L 419 241 L 417 241 L 416 240 L 403 240 L 401 238 L 401 219 L 400 218 L 400 217 L 399 216 L 398 213 L 396 211 L 395 211 L 393 209 L 392 209 L 391 208 L 389 208 L 388 207 L 373 207 L 372 208 L 370 208 L 367 211 L 367 217 L 368 218 L 368 219 L 369 219 L 371 221 L 385 221 L 387 223 L 387 238 L 384 240 L 245 240 L 242 237 L 242 223 L 244 221 L 341 221 L 345 217 L 345 212 L 344 211 L 344 210 L 342 208 L 340 208 L 339 207 L 242 207 L 241 208 L 239 208 L 238 209 L 235 210 L 231 214 L 231 215 L 229 218 L 229 221 L 228 222 L 228 239 L 227 240 L 164 240 L 162 238 L 162 237 L 161 236 L 161 234 L 339 56 L 339 55 L 340 54 L 340 52 L 341 51 L 341 43 L 340 42 L 339 39 L 337 37 L 337 36 L 328 27 L 327 27 L 321 21 L 320 21 L 313 15 L 312 15 L 311 14 L 310 14 L 308 12 L 307 12 L 306 11 L 305 11 L 300 8 L 298 8 L 295 6 L 293 6 L 292 5 L 290 5 L 289 4 L 287 4 L 286 3 L 283 3 L 282 2 L 278 2 L 277 1 L 271 1 L 270 0 L 251 0 L 250 1 L 244 1 L 243 2 L 239 2 L 238 3 L 235 3 L 234 4 L 232 4 L 231 5 L 229 5 L 228 6 L 226 6 L 221 9 L 219 9 L 218 10 L 215 11 L 213 13 L 210 14 L 208 16 L 207 16 L 205 18 L 204 18 L 201 21 L 200 21 L 184 37 L 182 37 L 175 30 L 174 30 L 169 27 L 160 27 L 159 28 Z M 361 462 L 370 462 L 371 463 L 373 463 L 375 465 L 376 465 L 380 469 L 380 470 L 382 472 L 382 474 L 383 475 L 383 483 L 382 484 L 382 486 L 381 487 L 381 488 L 377 493 L 376 493 L 374 495 L 373 495 L 372 496 L 370 496 L 369 497 L 362 497 L 361 496 L 359 496 L 358 495 L 357 495 L 352 491 L 352 490 L 350 488 L 350 487 L 349 486 L 349 484 L 348 483 L 348 475 L 349 474 L 349 472 L 351 470 L 351 469 L 355 465 L 356 465 L 358 463 L 360 463 Z M 229 434 L 230 433 L 230 431 L 231 430 L 231 427 L 232 426 L 232 423 L 233 422 L 233 420 L 234 419 L 325 419 L 327 422 L 327 425 L 328 426 L 328 429 L 329 430 L 329 433 L 330 434 L 330 436 L 329 437 L 230 437 L 229 436 Z M 237 404 L 238 403 L 238 400 L 239 399 L 239 396 L 240 395 L 240 392 L 241 391 L 241 388 L 242 387 L 242 384 L 243 383 L 243 380 L 244 379 L 244 376 L 245 375 L 245 373 L 246 372 L 246 369 L 247 368 L 247 365 L 249 363 L 311 363 L 312 364 L 312 367 L 313 368 L 313 371 L 314 372 L 314 375 L 315 376 L 315 379 L 316 380 L 316 382 L 317 383 L 317 386 L 318 387 L 318 390 L 319 391 L 319 394 L 320 395 L 320 398 L 321 399 L 321 402 L 322 403 L 322 404 L 321 405 L 238 405 Z M 327 363 L 336 363 L 337 362 L 343 362 L 344 363 L 344 366 L 345 367 L 345 369 L 346 370 L 346 373 L 347 374 L 347 377 L 348 378 L 348 381 L 349 382 L 349 385 L 350 386 L 350 389 L 351 390 L 351 393 L 352 394 L 352 397 L 353 398 L 353 400 L 354 401 L 354 404 L 355 405 L 355 408 L 356 409 L 356 412 L 357 413 L 357 416 L 358 417 L 358 420 L 359 421 L 359 424 L 360 425 L 360 427 L 361 428 L 361 431 L 362 432 L 362 435 L 363 436 L 363 439 L 364 440 L 364 443 L 365 444 L 365 447 L 364 448 L 359 448 L 358 449 L 355 449 L 350 452 L 348 450 L 348 447 L 347 446 L 347 443 L 346 442 L 346 439 L 345 438 L 345 435 L 344 434 L 344 432 L 343 431 L 343 428 L 342 427 L 342 424 L 341 423 L 341 420 L 340 419 L 340 416 L 339 415 L 339 412 L 338 411 L 338 408 L 337 407 L 337 405 L 336 404 L 336 401 L 335 400 L 335 397 L 334 396 L 334 393 L 333 392 L 333 389 L 332 388 L 332 385 L 331 384 L 331 381 L 330 380 L 330 378 L 329 377 L 329 374 L 328 373 L 328 370 L 327 369 L 327 366 L 326 365 L 326 364 Z M 163 317 L 164 316 L 395 316 L 396 317 L 393 320 L 393 321 L 386 328 L 385 328 L 380 333 L 379 333 L 374 337 L 371 338 L 369 340 L 368 340 L 367 341 L 365 341 L 360 344 L 358 344 L 357 345 L 354 345 L 353 346 L 351 346 L 350 347 L 346 347 L 345 348 L 338 348 L 337 349 L 222 349 L 221 348 L 214 348 L 213 347 L 209 347 L 208 346 L 206 346 L 205 345 L 202 345 L 201 344 L 199 344 L 198 343 L 197 343 L 196 342 L 195 342 L 194 341 L 193 341 L 192 340 L 191 340 L 190 339 L 189 339 L 188 338 L 185 337 L 183 335 L 182 335 L 179 332 L 178 332 L 173 327 L 172 327 L 167 322 L 167 321 Z M 98 293 L 101 290 L 102 290 L 103 289 L 134 289 L 135 290 L 135 292 L 136 293 L 136 295 L 137 296 L 137 299 L 138 300 L 138 301 L 137 302 L 102 302 L 98 298 Z M 146 271 L 148 269 L 150 269 L 151 268 L 152 268 L 156 264 L 157 264 L 157 263 L 160 260 L 160 259 L 163 254 L 412 254 L 413 255 L 413 278 L 412 279 L 412 283 L 411 284 L 411 287 L 410 288 L 410 291 L 409 292 L 409 294 L 407 297 L 407 299 L 405 302 L 154 302 L 153 301 L 153 299 L 150 294 L 150 291 L 149 290 L 149 288 L 148 287 L 148 283 L 147 282 L 147 277 L 146 276 Z M 135 236 L 142 236 L 143 237 L 144 237 L 148 241 L 148 242 L 149 243 L 149 245 L 150 246 L 150 247 L 149 248 L 149 251 L 144 256 L 143 256 L 142 257 L 135 257 L 130 253 L 130 252 L 128 249 L 128 244 L 129 243 L 130 240 Z M 166 41 L 172 47 L 172 49 L 140 81 L 139 81 L 132 74 L 132 73 L 164 41 Z M 327 47 L 327 48 L 151 224 L 148 224 L 145 222 L 133 222 L 132 223 L 130 223 L 129 224 L 127 224 L 122 219 L 122 218 L 120 216 L 120 215 L 116 210 L 116 209 L 115 208 L 115 207 L 114 206 L 114 205 L 111 200 L 111 198 L 110 197 L 110 195 L 109 194 L 109 192 L 108 191 L 108 188 L 107 187 L 107 183 L 106 182 L 106 170 L 105 169 L 105 167 L 106 166 L 106 157 L 107 156 L 107 152 L 108 151 L 108 148 L 109 147 L 109 144 L 111 141 L 111 139 L 113 136 L 113 134 L 114 133 L 115 130 L 117 128 L 118 125 L 121 122 L 121 121 L 123 119 L 123 118 L 209 32 L 210 32 L 213 29 L 214 29 L 219 25 L 220 25 L 221 24 L 222 24 L 223 23 L 224 23 L 229 20 L 231 20 L 232 19 L 234 19 L 237 17 L 240 17 L 241 16 L 244 16 L 245 15 L 251 15 L 252 14 L 269 14 L 270 15 L 276 15 L 277 16 L 280 16 L 281 17 L 284 17 L 285 18 L 287 18 L 290 20 L 292 20 L 293 21 L 294 21 L 295 22 L 296 22 L 297 23 L 298 23 L 299 24 L 302 25 L 304 27 L 305 27 L 307 29 L 308 29 L 311 32 L 312 32 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "equipment:air-fryer":
      '<svg xmlns="http://www.w3.org/2000/svg"     width="512" height="512" viewBox="0 0 512 512"     fill="none">  <title>Ícone vetorial</title>  <path d="M 128 46 L 126 48 L 125 48 L 122 51 L 121 51 L 110 62 L 110 63 L 108 65 L 108 66 L 107 67 L 107 68 L 105 70 L 105 71 L 103 74 L 103 76 L 101 79 L 101 81 L 100 82 L 100 84 L 99 85 L 99 87 L 98 88 L 98 90 L 97 91 L 97 93 L 96 94 L 96 96 L 95 97 L 95 99 L 94 100 L 94 102 L 93 103 L 93 105 L 92 106 L 92 109 L 91 110 L 91 112 L 90 113 L 90 115 L 89 116 L 89 118 L 88 119 L 88 122 L 87 123 L 87 125 L 86 126 L 86 128 L 85 129 L 85 132 L 84 133 L 84 135 L 83 136 L 83 139 L 82 140 L 82 142 L 81 143 L 81 146 L 80 147 L 80 150 L 79 151 L 79 154 L 78 155 L 78 158 L 77 159 L 77 162 L 76 163 L 76 166 L 75 167 L 75 170 L 74 171 L 74 174 L 73 175 L 73 178 L 72 179 L 72 182 L 71 183 L 71 187 L 70 188 L 70 192 L 69 193 L 69 196 L 68 197 L 68 202 L 67 203 L 67 207 L 66 208 L 66 212 L 65 213 L 65 218 L 64 219 L 64 224 L 63 225 L 63 230 L 62 231 L 62 237 L 61 238 L 61 245 L 60 246 L 60 253 L 59 254 L 59 264 L 58 265 L 58 278 L 57 279 L 57 322 L 58 323 L 58 336 L 59 337 L 59 346 L 60 347 L 60 353 L 61 354 L 61 359 L 62 360 L 62 365 L 63 366 L 63 370 L 64 371 L 64 375 L 65 376 L 65 379 L 66 380 L 66 383 L 67 384 L 67 387 L 68 388 L 68 390 L 69 391 L 69 394 L 70 395 L 70 397 L 71 398 L 71 400 L 72 401 L 72 403 L 73 404 L 73 406 L 74 407 L 74 409 L 75 410 L 75 412 L 77 415 L 77 417 L 78 418 L 78 419 L 79 420 L 79 422 L 81 425 L 81 427 L 82 428 L 82 429 L 85 434 L 85 436 L 86 437 L 86 438 L 87 439 L 87 440 L 88 441 L 88 442 L 89 443 L 90 446 L 92 448 L 92 449 L 94 451 L 94 452 L 97 455 L 97 456 L 103 462 L 104 462 L 107 465 L 108 465 L 113 469 L 114 469 L 119 472 L 121 472 L 124 474 L 127 474 L 128 475 L 131 475 L 132 476 L 137 476 L 138 477 L 374 477 L 375 476 L 380 476 L 381 475 L 385 475 L 386 474 L 388 474 L 389 473 L 391 473 L 392 472 L 393 472 L 394 471 L 395 471 L 396 470 L 397 470 L 398 469 L 401 468 L 403 466 L 404 466 L 408 462 L 409 462 L 415 456 L 415 455 L 419 451 L 419 450 L 421 448 L 421 447 L 422 446 L 422 445 L 423 444 L 423 443 L 424 442 L 424 441 L 425 440 L 425 439 L 428 434 L 428 432 L 429 431 L 429 430 L 431 427 L 431 425 L 434 420 L 434 418 L 435 417 L 435 415 L 437 412 L 437 410 L 438 409 L 438 407 L 439 406 L 439 404 L 440 403 L 440 401 L 441 400 L 441 398 L 442 397 L 442 395 L 443 394 L 443 392 L 444 391 L 444 388 L 445 387 L 445 384 L 446 383 L 446 380 L 447 379 L 447 376 L 448 375 L 448 371 L 449 370 L 449 366 L 450 365 L 450 361 L 451 360 L 451 355 L 452 354 L 452 347 L 453 346 L 453 338 L 454 337 L 454 325 L 455 324 L 455 278 L 454 277 L 454 264 L 453 263 L 453 254 L 452 253 L 452 245 L 451 244 L 451 238 L 450 237 L 450 231 L 449 230 L 449 224 L 448 223 L 448 218 L 447 217 L 447 213 L 446 212 L 446 207 L 445 206 L 445 202 L 444 201 L 444 197 L 443 196 L 443 192 L 442 191 L 442 188 L 441 187 L 441 183 L 440 182 L 440 179 L 439 178 L 439 174 L 438 173 L 438 170 L 437 169 L 437 166 L 436 165 L 436 162 L 435 161 L 435 158 L 434 157 L 434 154 L 433 153 L 433 151 L 432 150 L 432 147 L 431 146 L 431 143 L 430 142 L 430 140 L 429 139 L 429 136 L 428 135 L 428 133 L 427 132 L 427 129 L 426 128 L 426 126 L 425 125 L 425 122 L 424 121 L 424 119 L 423 118 L 423 116 L 422 115 L 422 112 L 421 111 L 421 109 L 420 108 L 420 106 L 419 105 L 419 103 L 418 102 L 418 100 L 417 99 L 417 97 L 416 96 L 416 94 L 415 93 L 415 91 L 414 90 L 414 88 L 413 87 L 413 85 L 412 84 L 412 82 L 411 81 L 411 79 L 410 78 L 410 76 L 409 75 L 409 74 L 408 73 L 408 72 L 407 71 L 406 68 L 404 66 L 404 65 L 402 63 L 402 62 L 390 50 L 389 50 L 384 46 L 383 46 L 378 43 L 376 43 L 373 41 L 371 41 L 370 40 L 367 40 L 366 39 L 361 39 L 360 38 L 152 38 L 151 39 L 146 39 L 145 40 L 143 40 L 142 41 L 139 41 L 136 43 L 134 43 L 133 44 L 132 44 L 131 45 Z M 98 434 L 99 433 L 413 433 L 414 434 L 414 435 L 413 436 L 412 439 L 408 444 L 408 445 L 398 455 L 397 455 L 392 459 L 391 459 L 390 460 L 388 460 L 385 462 L 383 462 L 382 463 L 379 463 L 378 464 L 372 464 L 371 465 L 141 465 L 140 464 L 134 464 L 133 463 L 130 463 L 129 462 L 127 462 L 126 461 L 125 461 L 124 460 L 123 460 L 122 459 L 121 459 L 120 458 L 117 457 L 114 454 L 113 454 L 104 445 L 104 444 L 102 442 L 102 441 L 101 440 L 101 439 Z M 79 206 L 80 205 L 214 205 L 215 206 L 215 359 L 216 360 L 216 365 L 217 366 L 217 368 L 218 369 L 218 371 L 219 372 L 219 373 L 220 374 L 221 377 L 223 379 L 223 380 L 232 389 L 233 389 L 235 391 L 236 391 L 241 394 L 243 394 L 244 395 L 247 395 L 248 396 L 264 396 L 265 395 L 268 395 L 269 394 L 271 394 L 272 393 L 273 393 L 274 392 L 277 391 L 279 389 L 280 389 L 283 386 L 284 386 L 285 385 L 285 384 L 290 379 L 290 378 L 291 377 L 291 376 L 292 375 L 292 374 L 295 369 L 295 366 L 296 365 L 296 361 L 297 360 L 297 206 L 298 205 L 432 205 L 433 206 L 433 209 L 434 210 L 434 215 L 435 216 L 435 220 L 436 221 L 436 226 L 437 227 L 437 233 L 438 234 L 438 240 L 439 241 L 439 247 L 440 248 L 440 256 L 441 257 L 441 266 L 442 267 L 442 281 L 443 282 L 443 320 L 442 321 L 442 334 L 441 335 L 441 344 L 440 345 L 440 351 L 439 352 L 439 357 L 438 358 L 438 363 L 437 364 L 437 368 L 436 369 L 436 372 L 435 373 L 435 377 L 434 378 L 434 381 L 433 382 L 433 384 L 432 385 L 432 388 L 431 389 L 431 391 L 430 392 L 430 394 L 429 395 L 429 398 L 428 399 L 428 401 L 426 404 L 426 406 L 425 407 L 425 409 L 423 412 L 423 414 L 421 417 L 421 419 L 419 421 L 93 421 L 91 419 L 91 417 L 90 416 L 90 415 L 89 414 L 89 412 L 87 409 L 87 407 L 86 406 L 86 404 L 85 403 L 85 401 L 84 400 L 84 398 L 83 397 L 83 395 L 82 394 L 82 392 L 81 391 L 81 389 L 80 388 L 80 385 L 79 384 L 79 381 L 78 380 L 78 377 L 77 376 L 77 373 L 76 372 L 76 369 L 75 368 L 75 364 L 74 363 L 74 358 L 73 357 L 73 351 L 72 350 L 72 344 L 71 343 L 71 334 L 70 333 L 70 319 L 69 318 L 69 284 L 70 283 L 70 268 L 71 267 L 71 258 L 72 257 L 72 249 L 73 248 L 73 241 L 74 240 L 74 234 L 75 233 L 75 228 L 76 227 L 76 222 L 77 221 L 77 216 L 78 215 L 78 211 L 79 210 Z M 255 86 L 256 86 L 257 87 L 266 87 L 267 88 L 270 88 L 271 89 L 273 89 L 276 91 L 278 91 L 279 92 L 280 92 L 282 94 L 285 95 L 289 99 L 290 99 L 296 105 L 296 106 L 299 109 L 300 112 L 302 114 L 302 115 L 304 118 L 304 120 L 305 121 L 305 123 L 306 124 L 306 127 L 307 128 L 307 133 L 308 134 L 308 142 L 307 143 L 307 149 L 306 150 L 306 153 L 304 156 L 304 158 L 303 159 L 303 160 L 302 161 L 301 164 L 297 169 L 297 170 L 288 179 L 287 179 L 287 180 L 285 183 L 285 357 L 284 358 L 284 363 L 283 364 L 283 366 L 282 367 L 281 370 L 279 372 L 279 373 L 273 379 L 272 379 L 270 381 L 269 381 L 268 382 L 266 382 L 265 383 L 263 383 L 262 384 L 250 384 L 249 383 L 247 383 L 244 381 L 242 381 L 239 378 L 238 378 L 233 373 L 233 372 L 231 370 L 231 369 L 229 366 L 229 364 L 228 363 L 228 357 L 227 356 L 227 183 L 226 182 L 225 179 L 224 178 L 223 178 L 216 171 L 216 170 L 213 167 L 213 166 L 211 164 L 211 163 L 208 158 L 208 156 L 207 155 L 207 153 L 206 152 L 206 149 L 205 148 L 205 142 L 204 141 L 204 135 L 205 134 L 205 128 L 206 127 L 206 124 L 207 123 L 207 121 L 209 118 L 209 116 L 210 115 L 210 114 L 212 112 L 213 109 L 217 105 L 217 104 L 222 99 L 223 99 L 226 96 L 227 96 L 229 94 L 230 94 L 232 92 L 233 92 L 234 91 L 236 91 L 239 89 L 241 89 L 242 88 L 245 88 L 246 87 L 254 87 Z M 252 100 L 251 101 L 247 101 L 246 102 L 243 102 L 242 103 L 241 103 L 240 104 L 239 104 L 238 105 L 235 106 L 232 109 L 231 109 L 227 113 L 227 114 L 224 117 L 224 118 L 223 119 L 223 120 L 220 125 L 220 127 L 219 128 L 219 131 L 218 132 L 218 144 L 219 145 L 219 149 L 221 152 L 221 154 L 222 155 L 223 158 L 225 160 L 225 161 L 233 169 L 234 169 L 236 171 L 237 171 L 242 174 L 244 174 L 245 175 L 247 175 L 248 176 L 264 176 L 265 175 L 267 175 L 268 174 L 270 174 L 271 173 L 272 173 L 273 172 L 274 172 L 275 171 L 278 170 L 287 161 L 287 160 L 289 158 L 289 157 L 292 152 L 292 150 L 293 149 L 293 146 L 294 145 L 294 132 L 293 131 L 293 128 L 292 127 L 292 125 L 291 124 L 291 122 L 290 121 L 290 120 L 288 118 L 288 117 L 286 115 L 286 114 L 281 109 L 280 109 L 277 106 L 276 106 L 275 105 L 274 105 L 269 102 L 266 102 L 265 101 L 261 101 L 260 100 Z M 263 113 L 264 114 L 266 114 L 267 115 L 268 115 L 270 117 L 271 117 L 278 124 L 278 125 L 281 130 L 281 133 L 282 134 L 282 143 L 281 144 L 281 146 L 280 147 L 280 149 L 279 150 L 279 151 L 277 153 L 277 154 L 272 159 L 271 159 L 269 161 L 268 161 L 265 163 L 263 163 L 262 162 L 262 114 Z M 249 113 L 250 114 L 250 162 L 249 163 L 247 163 L 246 162 L 243 161 L 240 158 L 239 158 L 236 155 L 236 154 L 232 149 L 232 147 L 231 146 L 231 143 L 230 142 L 230 134 L 231 133 L 231 131 L 232 130 L 232 128 L 233 127 L 233 126 L 235 124 L 235 123 L 241 117 L 242 117 L 244 115 L 245 115 L 246 114 L 248 114 Z M 82 191 L 83 190 L 83 186 L 84 185 L 84 182 L 85 181 L 85 178 L 86 177 L 86 174 L 87 173 L 87 169 L 88 168 L 88 165 L 89 164 L 89 161 L 90 160 L 90 158 L 91 157 L 91 154 L 92 153 L 92 150 L 93 149 L 93 146 L 94 145 L 94 143 L 95 142 L 95 139 L 96 138 L 96 136 L 97 135 L 97 132 L 98 131 L 98 129 L 99 128 L 99 125 L 100 124 L 100 122 L 101 121 L 101 119 L 102 118 L 102 115 L 103 114 L 103 112 L 104 111 L 104 109 L 105 108 L 105 106 L 106 105 L 106 103 L 107 102 L 107 100 L 108 99 L 108 97 L 109 96 L 109 94 L 110 93 L 110 91 L 111 90 L 111 88 L 112 87 L 112 85 L 113 84 L 113 82 L 114 81 L 114 80 L 115 79 L 115 78 L 116 77 L 117 74 L 119 72 L 119 71 L 122 68 L 122 67 L 126 63 L 127 63 L 131 59 L 132 59 L 134 57 L 135 57 L 136 56 L 137 56 L 142 53 L 144 53 L 145 52 L 148 52 L 149 51 L 154 51 L 155 50 L 358 50 L 359 51 L 364 51 L 365 52 L 367 52 L 368 53 L 370 53 L 371 54 L 372 54 L 373 55 L 374 55 L 375 56 L 376 56 L 377 57 L 380 58 L 384 62 L 385 62 L 390 67 L 390 68 L 394 72 L 394 73 L 395 74 L 395 75 L 396 76 L 396 77 L 399 82 L 399 84 L 400 85 L 400 87 L 401 88 L 401 90 L 403 93 L 403 95 L 404 96 L 404 98 L 405 99 L 405 102 L 406 103 L 406 105 L 407 106 L 407 108 L 408 109 L 408 111 L 409 112 L 409 114 L 410 115 L 410 117 L 411 118 L 411 121 L 412 122 L 412 124 L 413 125 L 413 127 L 414 128 L 414 131 L 415 132 L 415 134 L 416 135 L 416 138 L 417 139 L 417 141 L 418 142 L 418 145 L 419 146 L 419 149 L 420 150 L 420 152 L 421 153 L 421 156 L 422 157 L 422 160 L 423 161 L 423 164 L 424 165 L 424 168 L 425 169 L 425 172 L 426 173 L 426 176 L 427 177 L 427 181 L 428 182 L 428 185 L 429 186 L 429 189 L 430 190 L 430 192 L 429 193 L 298 193 L 297 192 L 297 187 L 298 186 L 299 186 L 304 181 L 304 180 L 308 176 L 308 175 L 310 173 L 311 170 L 313 168 L 313 167 L 314 166 L 314 164 L 316 161 L 316 159 L 317 158 L 317 156 L 318 155 L 318 152 L 319 151 L 319 146 L 320 145 L 320 132 L 319 131 L 319 125 L 318 124 L 318 121 L 317 120 L 317 118 L 316 117 L 316 115 L 315 114 L 315 113 L 314 112 L 314 111 L 313 110 L 313 109 L 312 108 L 311 105 L 309 103 L 309 102 L 307 100 L 307 99 L 295 87 L 294 87 L 289 83 L 288 83 L 287 82 L 286 82 L 281 79 L 279 79 L 276 77 L 273 77 L 272 76 L 269 76 L 268 75 L 261 75 L 260 74 L 252 74 L 251 75 L 244 75 L 243 76 L 240 76 L 239 77 L 237 77 L 236 78 L 234 78 L 233 79 L 231 79 L 230 80 L 229 80 L 228 81 L 227 81 L 226 82 L 223 83 L 221 85 L 220 85 L 217 88 L 216 88 L 205 99 L 205 100 L 201 105 L 201 106 L 200 107 L 200 108 L 197 113 L 197 115 L 195 118 L 195 121 L 194 122 L 194 125 L 193 126 L 193 131 L 192 132 L 192 144 L 193 145 L 193 151 L 194 152 L 194 155 L 195 156 L 195 158 L 196 159 L 196 161 L 197 162 L 197 163 L 198 164 L 198 165 L 199 166 L 199 167 L 200 168 L 200 169 L 201 170 L 202 173 L 205 176 L 205 177 L 209 181 L 209 182 L 212 185 L 213 185 L 215 187 L 215 192 L 214 193 L 83 193 L 82 192 Z M 339 145 L 338 146 L 336 146 L 335 147 L 332 148 L 326 154 L 326 155 L 324 158 L 324 162 L 323 163 L 323 166 L 324 167 L 324 170 L 325 171 L 325 173 L 327 175 L 327 176 L 331 180 L 332 180 L 334 182 L 336 182 L 337 183 L 341 183 L 342 184 L 343 184 L 344 183 L 348 183 L 349 182 L 351 182 L 352 181 L 353 181 L 359 175 L 359 174 L 361 171 L 361 168 L 362 167 L 362 162 L 361 161 L 361 158 L 360 157 L 359 154 L 357 152 L 357 151 L 356 150 L 355 150 L 353 148 L 352 148 L 349 146 L 347 146 L 346 145 Z M 339 158 L 341 158 L 342 157 L 343 157 L 344 158 L 346 158 L 349 161 L 349 163 L 350 164 L 350 165 L 347 170 L 346 170 L 345 171 L 340 171 L 336 167 L 336 162 L 337 161 L 337 160 Z M 166 145 L 165 146 L 163 146 L 162 147 L 159 148 L 157 150 L 156 150 L 156 151 L 153 154 L 153 155 L 151 158 L 151 161 L 150 162 L 150 166 L 151 167 L 151 171 L 152 172 L 153 175 L 158 180 L 159 180 L 161 182 L 163 182 L 164 183 L 168 183 L 169 184 L 170 184 L 171 183 L 175 183 L 176 182 L 178 182 L 179 181 L 180 181 L 186 175 L 186 174 L 188 171 L 188 168 L 189 167 L 189 162 L 188 161 L 188 158 L 187 157 L 186 154 L 180 148 L 179 148 L 176 146 L 174 146 L 173 145 Z M 166 158 L 168 158 L 169 157 L 170 157 L 171 158 L 173 158 L 176 161 L 176 167 L 172 171 L 167 171 L 163 167 L 163 161 Z M 338 86 L 337 87 L 335 87 L 334 88 L 333 88 L 331 90 L 330 90 L 327 93 L 327 94 L 324 99 L 324 102 L 323 103 L 323 107 L 324 108 L 324 111 L 325 112 L 326 115 L 330 120 L 331 120 L 333 122 L 334 122 L 335 123 L 337 123 L 338 124 L 347 124 L 348 123 L 350 123 L 351 122 L 354 121 L 358 117 L 358 116 L 360 114 L 360 112 L 361 111 L 361 109 L 362 108 L 362 102 L 361 101 L 361 98 L 360 97 L 360 96 L 358 94 L 358 93 L 354 89 L 353 89 L 350 87 L 348 87 L 347 86 Z M 341 98 L 345 98 L 349 102 L 349 103 L 350 104 L 350 105 L 349 106 L 349 108 L 346 111 L 345 111 L 344 112 L 341 112 L 340 111 L 339 111 L 336 108 L 336 102 L 339 99 L 340 99 Z M 165 86 L 164 87 L 162 87 L 161 88 L 158 89 L 154 93 L 154 94 L 152 96 L 152 98 L 151 99 L 151 102 L 150 103 L 150 107 L 151 108 L 151 111 L 152 112 L 152 113 L 153 114 L 154 117 L 157 120 L 158 120 L 160 122 L 161 122 L 162 123 L 164 123 L 165 124 L 174 124 L 175 123 L 177 123 L 178 122 L 179 122 L 181 120 L 182 120 L 185 117 L 185 116 L 188 111 L 188 108 L 189 107 L 189 103 L 188 102 L 188 99 L 187 98 L 187 96 L 185 94 L 185 93 L 182 90 L 181 90 L 179 88 L 178 88 L 177 87 L 175 87 L 174 86 Z M 167 98 L 172 98 L 176 102 L 176 104 L 177 105 L 176 106 L 176 108 L 173 111 L 172 111 L 171 112 L 168 112 L 167 111 L 166 111 L 163 108 L 163 102 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    "equipment:panela-de-pressao":
      '<svg xmlns="http://www.w3.org/2000/svg"     width="512" height="512" viewBox="0 0 512 512"     fill="none">  <title>Ícone vetorial</title>  <path d="M 199 27 L 198 28 L 197 28 L 195 30 L 194 30 L 192 32 L 191 32 L 187 36 L 187 37 L 185 39 L 185 40 L 183 42 L 183 43 L 181 46 L 181 48 L 180 49 L 180 53 L 179 54 L 179 62 L 180 63 L 180 67 L 181 68 L 181 70 L 182 71 L 182 73 L 183 74 L 183 75 L 185 77 L 185 78 L 193 86 L 194 86 L 196 88 L 197 88 L 200 90 L 202 90 L 203 91 L 205 91 L 206 92 L 217 92 L 219 94 L 219 115 L 217 117 L 162 117 L 161 118 L 160 118 L 158 120 L 158 121 L 157 122 L 157 126 L 158 127 L 158 128 L 160 130 L 161 130 L 162 131 L 357 131 L 358 132 L 366 132 L 367 133 L 372 133 L 373 134 L 378 134 L 379 135 L 382 135 L 383 136 L 387 136 L 388 137 L 391 137 L 392 138 L 394 138 L 395 139 L 398 139 L 399 140 L 401 140 L 402 141 L 404 141 L 407 143 L 409 143 L 410 144 L 412 144 L 415 146 L 417 146 L 418 147 L 419 147 L 420 148 L 421 148 L 426 151 L 428 151 L 430 153 L 431 153 L 432 154 L 431 155 L 80 155 L 79 154 L 80 153 L 81 153 L 82 152 L 83 152 L 84 151 L 85 151 L 86 150 L 87 150 L 88 149 L 89 149 L 94 146 L 96 146 L 99 144 L 101 144 L 102 143 L 104 143 L 107 141 L 110 141 L 113 139 L 116 139 L 117 138 L 119 138 L 120 137 L 123 137 L 124 136 L 128 136 L 129 135 L 133 135 L 134 134 L 137 134 L 141 130 L 141 124 L 138 121 L 137 121 L 136 120 L 132 120 L 131 121 L 127 121 L 126 122 L 123 122 L 122 123 L 119 123 L 118 124 L 115 124 L 114 125 L 111 125 L 110 126 L 108 126 L 107 127 L 105 127 L 104 128 L 102 128 L 101 129 L 99 129 L 98 130 L 96 130 L 93 132 L 91 132 L 86 135 L 84 135 L 83 136 L 82 136 L 81 137 L 80 137 L 79 138 L 78 138 L 77 139 L 76 139 L 75 140 L 74 140 L 73 141 L 72 141 L 71 142 L 68 143 L 66 145 L 63 146 L 61 148 L 58 149 L 56 151 L 53 152 L 51 154 L 50 154 L 49 155 L 45 155 L 44 156 L 42 156 L 41 157 L 40 157 L 38 159 L 37 159 L 31 165 L 31 166 L 28 171 L 28 173 L 27 174 L 27 184 L 28 185 L 28 187 L 29 188 L 29 189 L 30 190 L 31 193 L 37 199 L 38 199 L 40 201 L 42 201 L 43 202 L 45 202 L 46 203 L 53 203 L 54 204 L 54 231 L 53 232 L 34 232 L 33 233 L 26 233 L 25 234 L 23 234 L 22 235 L 20 235 L 19 236 L 18 236 L 16 238 L 15 238 L 13 240 L 12 240 L 8 244 L 8 245 L 5 248 L 5 249 L 2 254 L 2 256 L 1 257 L 1 260 L 0 261 L 0 272 L 1 273 L 1 276 L 2 277 L 2 279 L 3 280 L 3 281 L 4 282 L 5 285 L 8 288 L 8 289 L 15 295 L 16 295 L 17 296 L 18 296 L 23 299 L 26 299 L 27 300 L 53 300 L 54 301 L 54 416 L 55 417 L 55 423 L 56 424 L 56 427 L 57 428 L 57 431 L 58 432 L 58 434 L 60 437 L 60 439 L 61 440 L 61 441 L 62 442 L 62 443 L 63 444 L 64 447 L 66 449 L 67 452 L 70 455 L 70 456 L 75 461 L 75 462 L 78 465 L 79 465 L 85 471 L 86 471 L 88 473 L 89 473 L 91 475 L 94 476 L 96 478 L 97 478 L 98 479 L 100 479 L 105 482 L 107 482 L 108 483 L 110 483 L 111 484 L 114 484 L 115 485 L 119 485 L 120 486 L 128 486 L 129 487 L 379 487 L 380 486 L 383 485 L 383 484 L 385 482 L 385 478 L 384 477 L 384 476 L 381 473 L 130 473 L 129 472 L 121 472 L 120 471 L 117 471 L 116 470 L 114 470 L 113 469 L 111 469 L 110 468 L 108 468 L 107 467 L 106 467 L 105 466 L 104 466 L 103 465 L 100 464 L 98 462 L 97 462 L 94 459 L 93 459 L 81 447 L 81 446 L 77 441 L 77 440 L 76 439 L 76 438 L 75 437 L 75 436 L 72 431 L 72 429 L 71 428 L 71 426 L 70 425 L 70 422 L 69 421 L 69 416 L 68 415 L 68 301 L 69 300 L 114 300 L 115 299 L 118 299 L 119 298 L 120 298 L 121 297 L 122 297 L 123 296 L 126 295 L 135 286 L 135 285 L 136 284 L 136 283 L 139 278 L 139 276 L 140 275 L 140 271 L 141 270 L 141 263 L 140 262 L 140 258 L 139 257 L 139 255 L 138 254 L 138 253 L 137 252 L 137 250 L 135 248 L 135 247 L 131 243 L 131 242 L 130 242 L 126 238 L 125 238 L 124 237 L 123 237 L 118 234 L 115 234 L 114 233 L 108 233 L 107 232 L 69 232 L 68 231 L 68 204 L 69 203 L 442 203 L 443 204 L 443 415 L 442 416 L 442 421 L 441 422 L 441 425 L 440 426 L 440 428 L 439 429 L 439 431 L 438 432 L 438 433 L 437 434 L 437 435 L 436 436 L 436 437 L 435 438 L 434 441 L 432 443 L 432 444 L 430 446 L 430 447 L 417 460 L 416 460 L 411 464 L 410 464 L 409 465 L 408 465 L 407 466 L 404 467 L 401 470 L 401 471 L 400 472 L 400 475 L 401 476 L 401 477 L 404 480 L 410 480 L 411 479 L 413 479 L 414 478 L 415 478 L 417 476 L 420 475 L 425 471 L 426 471 L 432 465 L 433 465 L 435 463 L 435 462 L 441 456 L 441 455 L 443 453 L 443 452 L 447 447 L 447 446 L 448 445 L 448 444 L 451 439 L 451 437 L 452 436 L 452 434 L 454 431 L 454 428 L 455 427 L 455 423 L 456 422 L 456 417 L 457 416 L 457 301 L 458 300 L 484 300 L 485 299 L 488 299 L 489 298 L 490 298 L 491 297 L 492 297 L 493 296 L 496 295 L 499 292 L 500 292 L 506 285 L 506 284 L 509 279 L 509 277 L 510 276 L 510 273 L 511 272 L 511 261 L 510 260 L 510 257 L 509 256 L 509 254 L 508 253 L 508 252 L 507 251 L 506 248 L 503 245 L 503 244 L 499 240 L 498 240 L 493 236 L 492 236 L 491 235 L 489 235 L 488 234 L 486 234 L 485 233 L 478 233 L 477 232 L 458 232 L 457 231 L 457 204 L 458 203 L 465 203 L 466 202 L 468 202 L 469 201 L 471 201 L 473 199 L 474 199 L 480 193 L 480 192 L 483 187 L 483 184 L 484 183 L 484 174 L 483 173 L 483 171 L 482 170 L 482 169 L 481 168 L 480 165 L 474 159 L 473 159 L 471 157 L 470 157 L 469 156 L 467 156 L 466 155 L 462 155 L 461 154 L 460 154 L 458 152 L 457 152 L 455 150 L 454 150 L 453 149 L 450 148 L 448 146 L 445 145 L 443 143 L 442 143 L 441 142 L 440 142 L 439 141 L 438 141 L 437 140 L 436 140 L 435 139 L 434 139 L 433 138 L 432 138 L 427 135 L 425 135 L 420 132 L 418 132 L 415 130 L 413 130 L 412 129 L 410 129 L 409 128 L 407 128 L 406 127 L 404 127 L 403 126 L 401 126 L 400 125 L 397 125 L 396 124 L 393 124 L 392 123 L 389 123 L 388 122 L 385 122 L 384 121 L 380 121 L 379 120 L 374 120 L 373 119 L 368 119 L 367 118 L 358 118 L 357 117 L 282 117 L 280 115 L 280 94 L 282 92 L 293 92 L 294 91 L 296 91 L 297 90 L 299 90 L 300 89 L 301 89 L 302 88 L 305 87 L 314 78 L 314 77 L 316 75 L 316 74 L 317 73 L 317 71 L 318 70 L 318 68 L 319 67 L 319 64 L 320 63 L 320 54 L 319 53 L 319 49 L 318 48 L 318 46 L 317 45 L 317 44 L 316 43 L 315 40 L 312 37 L 312 36 L 308 32 L 307 32 L 304 29 L 303 29 L 300 27 L 298 27 L 297 26 L 295 26 L 294 25 L 289 25 L 288 24 L 211 24 L 210 25 L 205 25 L 204 26 L 202 26 L 201 27 Z M 457 247 L 458 246 L 477 246 L 478 247 L 483 247 L 484 248 L 487 249 L 489 251 L 490 251 L 492 253 L 492 254 L 495 257 L 495 258 L 496 259 L 496 262 L 497 263 L 497 270 L 496 271 L 496 273 L 495 274 L 494 277 L 487 284 L 486 284 L 485 285 L 483 285 L 482 286 L 458 286 L 457 285 Z M 14 263 L 15 262 L 15 259 L 16 258 L 16 257 L 19 254 L 19 253 L 20 252 L 21 252 L 24 249 L 25 249 L 28 247 L 33 247 L 34 246 L 107 246 L 108 247 L 112 247 L 113 248 L 115 248 L 116 249 L 117 249 L 124 256 L 124 257 L 126 260 L 126 263 L 127 264 L 127 269 L 126 270 L 126 273 L 125 274 L 124 277 L 118 283 L 117 283 L 115 285 L 113 285 L 112 286 L 29 286 L 28 285 L 26 285 L 25 284 L 24 284 L 17 277 L 17 276 L 15 273 L 15 271 L 14 270 Z M 41 176 L 42 175 L 42 174 L 46 170 L 47 170 L 48 169 L 463 169 L 464 170 L 465 170 L 469 174 L 469 175 L 470 176 L 470 181 L 469 182 L 469 184 L 465 188 L 464 188 L 463 189 L 48 189 L 47 188 L 46 188 L 42 184 L 42 182 L 41 181 Z M 233 93 L 234 92 L 265 92 L 266 93 L 266 116 L 265 117 L 234 117 L 233 116 Z M 193 55 L 194 54 L 194 52 L 195 51 L 196 48 L 203 41 L 204 41 L 207 39 L 210 39 L 211 38 L 288 38 L 289 39 L 292 39 L 293 40 L 296 41 L 301 45 L 301 46 L 303 48 L 303 49 L 305 52 L 305 54 L 306 55 L 306 62 L 305 63 L 305 65 L 304 66 L 303 69 L 297 75 L 296 75 L 294 77 L 292 77 L 291 78 L 208 78 L 207 77 L 205 77 L 203 75 L 202 75 L 196 69 L 196 68 L 194 65 L 194 62 L 193 61 Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
  };
  // Todos os 9 valores de Equipamento agora são SVG embutido (nenhum PNG restante — os 3
  // últimos, air-fryer/panela-de-pressao/churrasqueira, eram Icons8 com filter:invert(1) como
  // aproximação; substituídos por SVG real autoral, mesmo padrão dos outros 6). O fallback ""
  // abaixo fica só como rede de segurança pra um futuro valor de equipamento sem ícone ainda
  // mapeado.
  function equipmentTileIconHtml(tagId) {
    if (EQUIPMENT_SVG_MARKUP[tagId]) {
      return '<span class="filter-tile__icon filter-tile__icon--svg" aria-hidden="true">' + EQUIPMENT_SVG_MARKUP[tagId] + "</span>";
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

      // Piloto de redesenho visual — só Ingrediente (def.layout === "ingredient-tiles").
      // Chips removíveis dos selecionados continuam IDÊNTICOS a renderMultiSectionBody; só o
      // <select> de "+ adicionar" vira uma grade de tiles mais densa (mais colunas, tiles
      // menores que País/Equipamento — classe filter-tile-grid--dense/filter-tile--dense) pra
      // caber ~30-40 valores confortavelmente em 360-430px. Clicar num tile addable adiciona à
      // seleção (equivalente a escolher no <select> antigo); não existe estado "is-selected"
      // aqui, porque um valor selecionado sai da grade e vira chip — nunca aparece nos dois
      // lugares ao mesmo tempo. Nenhuma mudança na lógica AND+fallback OR de Ingrediente.
      function renderIngredientTileSectionBody(sectionBody, def, options) {
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
            ? '<div class="filter-tile-grid filter-tile-grid--dense">' +
              addableOptions
                .map(
                  (o) =>
                    '<button type="button" class="filter-tile filter-tile--dense" data-value="' +
                    o.tagId +
                    '">' +
                    ingredientTileIconHtml(o.tagId) +
                    '<span class="filter-tile__label">' +
                    o.tag.label +
                    '</span><span class="filter-tile__count">' +
                    o.count +
                    "</span></button>"
                )
                .join("") +
              "</div>"
            : "");
        sectionBody.querySelectorAll("[data-remove]").forEach((btn) => {
          btn.addEventListener("click", () => {
            draftFacetState[def.key] = selectedIds.filter((id) => id !== btn.dataset.remove);
            renderBody();
          });
        });
        sectionBody.querySelectorAll(".filter-tile--dense").forEach((btn) => {
          btn.addEventListener("click", () => {
            draftFacetState[def.key] = selectedIds.concat([btn.dataset.value]);
            renderBody();
          });
        });
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

      // Piloto de redesenho visual (País e Equipamento, def.layout === "tiles") — grade de
      // tiles com ícone/label/contagem em vez de checkbox em lista. Mesma lógica de estado de
      // qualquer faceta combineMode "or": sem item "Todos" (nenhum tile marcado = nenhum
      // filtro ativo, igual a "Todos" marcado na versão em lista); marcar/desmarcar um tile
      // só alterna draftFacetState[def.key], reaproveitando computeFacetOptions pra contagem —
      // não recalcula nada que já não existisse. O ícone em si vem de def.tileIcon(tagId),
      // plugável por faceta (SVG/PNG reais em Equipamento, emoji de bandeira em País).
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
                def.tileIcon(o.tagId) +
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
        else if (def.layout === "ingredient-tiles") renderIngredientTileSectionBody(sectionBody, def, options);
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

  // Crédito a SVG Repo pelos 4 ícones de Equipamento que vieram de lá (forno, liquidificador,
  // batedeira, micro-ondas — não exigido pela licença deles, mas recomendado). Icons8 foi
  // REMOVIDO: os 3 últimos PNG (air-fryer, panela de pressão, churrasqueira) que exigiam essa
  // atribuição viraram SVG autoral nesta rodada — nenhum ícone do app usa mais Icons8. Os
  // demais autorais (Processador, Sous Vide, aba Preparos) também não entram aqui, confirmado
  // com o usuário. Fica em Minhas Receitas por ora — não há rodapé fixo no app pra isso ainda.
  function buildIconCreditsEl() {
    const el = document.createElement("div");
    el.className = "icon-credits";
    el.innerHTML =
      "<p>Ícones de equipamento por " +
      '<a href="https://www.svgrepo.com" target="_blank" rel="noopener noreferrer">SVG Repo</a>.</p>';
    return el;
  }

  // ---------- Telas de lista (Favoritos / Histórico) ----------
  const LIST_VIEWS = {
    favoritos: { title: "★ Favoritos", empty: "Você ainda não marcou nenhum prato como favorito.", getIds: () => Storage.getAllFavorites() },
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
  // Redesenho do card (docs/DESIGN-TOKENS.md): os 3 ícones de ação viraram 2 (já feito/
  // favoritar — "quero fazer" foi removido do app inteiro) e a barra de CTA "Ver receita"
  // saiu — o card inteiro é a área de toque (addEventListener de click no elemento raiz).
  // O coração de favoritar (canto direito do header, onde antes tinha um chevron — removido,
  // o coração já sinaliza interatividade daquela área sozinho) TEM que parar a propagação do
  // clique (stopPropagation), senão favoritar dispararia também a navegação pra receita. As
  // outras 2 ações (já feito/favoritar) continuam só na tela de receita própria
  // (renderReceita, .recipe-page-actions), sem mudança de comportamento lá além do ícone.
  function renderRecipeCard(item, opts) {
    opts = opts || {};
    const recipe = item.recipe;
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.recipeName = recipe.name;

    card.addEventListener("click", () => {
      Router.toReceita(item.id, opts.fromCollectionId);
    });

    // ---------- header: thumb | título+origem | coração de favoritar ----------
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

    const isFav = Storage.isFavorite(item.id);
    const heartBtn = document.createElement("button");
    heartBtn.type = "button";
    heartBtn.className = "recipe-card__heart" + (isFav ? " is-favorite" : "");
    heartBtn.setAttribute("aria-label", isFav ? "Remover dos favoritos" : "Favoritar");
    heartBtn.innerHTML = HEART_ICON_SVG;
    heartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const now = Storage.toggleFavorite(item.id);
      heartBtn.classList.toggle("is-favorite", now);
      heartBtn.setAttribute("aria-label", now ? "Remover dos favoritos" : "Favoritar");
    });

    cardHeader.appendChild(thumb);
    cardHeader.appendChild(titleBlock);
    cardHeader.appendChild(heartBtn);
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

    // ---------- meta (tempo, complexidade, porções) — ícone outline monocromático + valor ----------
    const meta = document.createElement("div");
    meta.className = "recipe-meta";
    let metaHtml = "";
    if (recipe.time && recipe.time.total) {
      metaHtml +=
        '<span class="recipe-meta-item">' + iconSvg("clock", "recipe-meta-item__icon") + "<span>" + recipe.time.total + "</span></span>";
    }
    if (recipe.difficulty) {
      metaHtml +=
        '<span class="recipe-meta-item">' + iconSvg("gauge", "recipe-meta-item__icon") + "<span>" + recipe.difficulty + "</span></span>";
    }
    if (recipe.yield) {
      metaHtml +=
        '<span class="recipe-meta-item">' + iconSvg("bowl", "recipe-meta-item__icon") + "<span>" + recipe.yield + "</span></span>";
    }
    meta.innerHTML = metaHtml;
    card.appendChild(meta);

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

    // Favoritar troca de ESTRUTURA inteira ao alternar (docs/DESIGN-TOKENS.md), não só de cor:
    // não favoritado = pill igual a "Marcar como feita" (classe .action-btn reaproveitada,
    // mesma borda/padding/formato), com o coração em contorno + texto "Favoritar". Favoritado =
    // pill some por completo, sobra só o ícone preenchido --color-accent, sem borda/fundo
    // (.recipe-page-heart, mesmo tratamento do coração do card). aria-label mantém
    // acessibilidade pra leitor de tela nos dois estados.
    const isFav = Storage.isFavorite(item.id);
    const favBtn = document.createElement("button");
    favBtn.type = "button";
    function renderFavBtn(fav) {
      favBtn.className = fav ? "recipe-page-heart is-favorite" : "action-btn";
      favBtn.innerHTML = fav ? HEART_ICON_SVG : HEART_ICON_SVG + "<span>Favoritar</span>";
      favBtn.setAttribute("aria-label", fav ? "Favoritado" : "Favoritar");
    }
    renderFavBtn(isFav);
    favBtn.addEventListener("click", () => {
      const now = Storage.toggleFavorite(item.id);
      renderFavBtn(now);
    });

    actions.appendChild(madeBtn);
    actions.appendChild(favBtn);
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
    } else if (route.name === "favoritos" || route.name === "historico") {
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

  // Toast simples de "nova versão disponível" — o sw.js já chama self.skipWaiting() sozinho no
  // install (nunca fica parado em "waiting"), então isso NÃO ativa nada manualmente, só avisa
  // que um novo Service Worker acabou de assumir o controle (oncontrollerchange) e a aba
  // aberta continua rodando o JS antigo até recarregar.
  function showUpdateToast() {
    if (document.querySelector(".update-toast")) return; // já mostrando, não duplica
    const toast = document.createElement("div");
    toast.className = "update-toast";
    toast.innerHTML =
      "<span>Nova versão disponível.</span>" + '<button type="button" class="update-toast__btn">Atualizar</button>';
    document.body.appendChild(toast);
    toast.querySelector(".update-toast__btn").addEventListener("click", () => location.reload());
  }

  // ---------- PWA: service worker (uso offline) ----------
  if ("serviceWorker" in navigator) {
    // Capturado AGORA (síncrono, no momento em que este script roda) — não depois do
    // register()/load, e não contando eventos. Se já existia um controller, esta aba já era
    // controlada por um SW anterior; qualquer controllerchange DEPOIS disso é uma atualização
    // de verdade. Se não existia (primeira instalação), o primeiro controllerchange é só o SW
    // novo assumindo pela primeira vez — nunca deve mostrar o toast.
    const hadControllerBefore = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadControllerBefore) return;
      showUpdateToast();
    });
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((registration) => {
          // Sem isso, o app só confiava no timing padrão do navegador (checagem em navegação
          // real) — insuficiente pra um PWA "standalone", onde reabrir pelo ícone geralmente
          // NÃO conta como navegação nova. Forçar update() ao voltar de segundo plano cobre
          // exatamente esse caso.
          document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") registration.update();
          });
        })
        .catch(() => {});
    });
  }
})();
