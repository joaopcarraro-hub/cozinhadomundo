// router.js — navegação baseada em hash (#/...), sem depender de servidor.
// Rotas: home | grupo/:id (grupo macro) | categoria/:id (id de coleção) | busca?tags=a,b,c
//        receita/:id | cozinhar/:id
//        minhas-receitas (favoritas/já feitas, com abas) | preparos | lista-compras
//        (as 2 últimas ainda são telas-placeholder da barra inferior)
// :id de receita/cozinhar é o id único global da receita (TagModel), não mais catId+nome.
(function () {
  const listeners = [];

  // #/receita/:id e #/cozinhar/:id levam o id-slug direto na URL — renomear recipe.name muda
  // esse slug (ver skill recipe-data-quality, leva de 2026-07-24). window.Storage.RENAME_SLUG_MAP
  // é a MESMA tabela que migra favoritas/feitas/últimas-visitadas (storage.js, carregado antes
  // deste arquivo) — um link salvo com o slug antigo continua abrindo a receita certa.
  function resolveRecipeIdAlias(id) {
    const map = window.Storage && window.Storage.RENAME_SLUG_MAP;
    return (map && map[id]) || id;
  }

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { name: "home" };

    const [pathPart, queryPart] = raw.split("?");
    const parts = pathPart.split("/").map(function (p) {
      try {
        return decodeURIComponent(p);
      } catch (e) {
        return p;
      }
    });

    if (parts[0] === "grupo" && parts[1]) {
      return { name: "grupo", grupoId: parts[1] };
    }
    if (parts[0] === "categoria" && parts[1]) {
      let catTags = [];
      let role = null;
      let ingredientMode = null;
      if (queryPart) {
        queryPart.split("&").forEach(function (pair) {
          const [k, v] = pair.split("=");
          if (k === "tags" && v) {
            catTags = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
          if (k === "role" && v) {
            role = v;
          }
          if (k === "imode" && v === "and") {
            ingredientMode = "and";
          }
        });
      }
      return { name: "categoria", catId: parts[1], tags: catTags, role: role, ingredientMode: ingredientMode };
    }
    if (parts[0] === "busca") {
      let tags = [];
      let textFilters = [];
      let ingredientMode = null;
      // query: texto ainda não commitado (preview ao vivo, ver Router.replaceBusca) — vive só
      // na URL enquanto o usuário digita; renderBusca nasce já com o preview desse texto
      // renderizado (sobrevive ao "Voltar" de uma receita aberta a partir do preview).
      let query = null;
      if (queryPart) {
        queryPart.split("&").forEach(function (pair) {
          const [k, v] = pair.split("=");
          if (k === "tags" && v) {
            tags = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
          if (k === "text" && v) {
            textFilters = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
          if (k === "imode" && v === "and") {
            ingredientMode = "and";
          }
          if (k === "q" && v) {
            try {
              query = decodeURIComponent(v);
            } catch (e) {
              query = v;
            }
          }
        });
      }
      return { name: "busca", tags: tags, textFilters: textFilters, ingredientMode: ingredientMode, query: query };
    }
    // fromHash: rota de origem inteira (ver comentário de Router.toReceita/toCozinhar abaixo),
    // não mais só um catId — decodificada aqui, mas NUNCA reprocessada por parseHash de novo
    // (é usada como string opaca por Router.navigate quando o usuário clica "Voltar").
    let fromHash = null;
    let portion = null;
    if (queryPart) {
      queryPart.split("&").forEach(function (pair) {
        const [k, v] = pair.split("=");
        if (k === "from" && v) {
          try {
            fromHash = decodeURIComponent(v);
          } catch (e) {
            fromHash = v;
          }
        }
        if (k === "portion" && v) {
          portion = parseFloat(v);
        }
      });
    }
    if (parts[0] === "receita" && parts[1]) {
      return { name: "receita", id: resolveRecipeIdAlias(parts[1]), fromHash: fromHash };
    }
    if (parts[0] === "cozinhar" && parts[1]) {
      // portion: multiplicador de porções capturado do stepper da tela de receita no momento
      // de clicar "Começar preparo" (Fase 2) — só usado se renderCookMode for CRIAR uma sessão
      // nova; retomar uma sessão em andamento ignora esse valor (usa o portionMultiplier já
      // salvo). null quando a receita não tinha stepper (yield sem base numérica).
      return { name: "cozinhar", id: resolveRecipeIdAlias(parts[1]), fromHash: fromHash, portion: portion && !isNaN(portion) ? portion : null };
    }
    if (parts[0] === "minhas-receitas") {
      return { name: "minhas-receitas" };
    }
    if (parts[0] === "preparos") {
      return { name: "preparos" };
    }
    if (parts[0] === "lista-compras") {
      return { name: "lista-compras" };
    }
    return { name: "home" };
  }

  function navigate(path) {
    location.hash = "/" + path;
  }

  // Quem precisa saber quando a URL muda por replace() (history.replaceState não dispara
  // hashchange nem popstate) — usado pelo scroll por rota em app.js pra manter o "hash atual"
  // sincronizado mesmo quando o refino de filtro in-context (replaceCategoriaFacets) troca a
  // URL sem navegar de verdade. Sem isso, salvar o scroll ao sair da tela usaria a chave de
  // ANTES do filtro ser aplicado (stale), nunca batendo com o hash que "Voltar" reconstrói.
  const replaceListeners = [];
  function onReplace(fn) {
    replaceListeners.push(fn);
  }

  // Atualiza a URL sem empilhar uma entrada nova no histórico (bom pra "digitar e buscar").
  function replace(path) {
    const url = location.pathname + location.search + "#/" + path;
    history.replaceState(null, "", url);
    replaceListeners.forEach(function (fn) {
      fn(path);
    });
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  // Compartilhado por toBusca (navega, sem q) e replaceBusca (substitui, com q opcional).
  function buildBuscaPath(tagIds, textFilters, ingredientMode, query) {
    const q = (tagIds || []).map(encodeURIComponent).join(",");
    const t = (textFilters || []).map(encodeURIComponent).join(",");
    const params = [];
    if (q) params.push("tags=" + q);
    if (t) params.push("text=" + t);
    if (ingredientMode === "and") params.push("imode=and");
    if (query) params.push("q=" + encodeURIComponent(query));
    return "busca" + (params.length ? "?" + params.join("&") : "");
  }

  window.addEventListener("hashchange", function () {
    const route = parseHash();
    listeners.forEach(function (fn) {
      fn(route);
    });
  });

  window.Router = {
    current: parseHash,
    onChange: onChange,
    onReplace: onReplace,
    navigate: navigate,
    replace: replace,
    toHome: function () {
      navigate("");
    },
    toGrupo: function (grupoId) {
      navigate("grupo/" + encodeURIComponent(grupoId));
    },
    toCategoria: function (catId) {
      navigate("categoria/" + encodeURIComponent(catId));
    },
    // Atualiza as facetas extras (e o papel da proteína, se houver) de uma categoria na URL sem
    // navegar (sem empilhar histórico e sem re-disparar handleRoute) — usado pelo refino
    // in-context de renderCategory.
    replaceCategoriaFacets: function (catId, tagIds, role, ingredientMode) {
      const q = (tagIds || []).map(encodeURIComponent).join(",");
      const params = [];
      if (q) params.push("tags=" + q);
      if (role) params.push("role=" + encodeURIComponent(role));
      if (ingredientMode === "and") params.push("imode=and");
      replace("categoria/" + encodeURIComponent(catId) + (params.length ? "?" + params.join("&") : ""));
    },
    toBusca: function (tagIds, textFilters, ingredientMode) {
      navigate(buildBuscaPath(tagIds, textFilters, ingredientMode, null));
    },
    // Preview ao vivo (digitar e buscar): atualiza a URL com q= sem empilhar histórico e sem
    // re-disparar handleRoute (mesmo mecanismo de replaceCategoriaFacets) — Enter/tocar um chip
    // é que materializa de verdade em tags=/text= via toBusca (dropando q).
    replaceBusca: function (tagIds, textFilters, ingredientMode, query) {
      replace(buildBuscaPath(tagIds, textFilters, ingredientMode, query));
    },
    // fromHash: rota de origem INTEIRA (path+query, sem o "#/" — mesmo formato de "raw" acima,
    // ex.: "categoria/molhos?tags=ingredient:tomate&imode=and"), não mais só o catId. Guarda o
    // hash de origem de verdade em vez de reconstruir a rota do zero, pra "Voltar" (renderReceita)
    // reproduzir o estado EXATO de filtro (tags/imode/role) de onde a receita foi aberta — não só
    // a coleção certa, sem filtro nenhum. Só passa por cima (query "from="), nunca decodifica
    // internamente; quem lê de volta é renderReceita, via Router.navigate(fromHash) direto.
    toReceita: function (id, fromHash) {
      navigate("receita/" + encodeURIComponent(id) + (fromHash ? "?from=" + encodeURIComponent(fromHash) : ""));
    },
    toCozinhar: function (id, fromHash, portionMultiplier) {
      const params = [];
      if (fromHash) params.push("from=" + encodeURIComponent(fromHash));
      if (portionMultiplier) params.push("portion=" + encodeURIComponent(portionMultiplier));
      navigate("cozinhar/" + encodeURIComponent(id) + (params.length ? "?" + params.join("&") : ""));
    },
    toMinhasReceitas: function () {
      navigate("minhas-receitas");
    },
    toPreparos: function () {
      navigate("preparos");
    },
    toListaCompras: function () {
      navigate("lista-compras");
    },
  };
})();
