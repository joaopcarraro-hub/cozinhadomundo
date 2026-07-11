// router.js — navegação baseada em hash (#/...), sem depender de servidor.
// Rotas: home | grupo/:id (grupo macro) | categoria/:id (id de coleção) | busca?tags=a,b,c
//        receita/:id | cozinhar/:id | favoritos | quero-fazer | historico
// :id de receita/cozinhar é o id único global da receita (TagModel), não mais catId+nome.
(function () {
  const listeners = [];

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
      if (queryPart) {
        queryPart.split("&").forEach(function (pair) {
          const [k, v] = pair.split("=");
          if (k === "tags" && v) {
            catTags = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
          if (k === "role" && v) {
            role = v;
          }
        });
      }
      return { name: "categoria", catId: parts[1], tags: catTags, role: role };
    }
    if (parts[0] === "busca") {
      let tags = [];
      let textFilters = [];
      if (queryPart) {
        queryPart.split("&").forEach(function (pair) {
          const [k, v] = pair.split("=");
          if (k === "tags" && v) {
            tags = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
          if (k === "text" && v) {
            textFilters = v.split(",").map(decodeURIComponent).filter(Boolean);
          }
        });
      }
      return { name: "busca", tags: tags, textFilters: textFilters };
    }
    let from = null;
    if (queryPart) {
      queryPart.split("&").forEach(function (pair) {
        const [k, v] = pair.split("=");
        if (k === "from" && v) {
          try {
            from = decodeURIComponent(v);
          } catch (e) {
            from = v;
          }
        }
      });
    }
    if (parts[0] === "receita" && parts[1]) {
      return { name: "receita", id: parts[1], from: from };
    }
    if (parts[0] === "cozinhar" && parts[1]) {
      return { name: "cozinhar", id: parts[1], from: from };
    }
    if (parts[0] === "favoritos") {
      return { name: "favoritos" };
    }
    if (parts[0] === "quero-fazer") {
      return { name: "quero-fazer" };
    }
    if (parts[0] === "historico") {
      return { name: "historico" };
    }
    return { name: "home" };
  }

  function navigate(path) {
    location.hash = "/" + path;
  }

  // Atualiza a URL sem empilhar uma entrada nova no histórico (bom pra "digitar e buscar").
  function replace(path) {
    const url = location.pathname + location.search + "#/" + path;
    history.replaceState(null, "", url);
  }

  function onChange(fn) {
    listeners.push(fn);
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
    replaceCategoriaFacets: function (catId, tagIds, role) {
      const q = (tagIds || []).map(encodeURIComponent).join(",");
      const params = [];
      if (q) params.push("tags=" + q);
      if (role) params.push("role=" + encodeURIComponent(role));
      replace("categoria/" + encodeURIComponent(catId) + (params.length ? "?" + params.join("&") : ""));
    },
    toBusca: function (tagIds, textFilters) {
      const q = (tagIds || []).map(encodeURIComponent).join(",");
      const t = (textFilters || []).map(encodeURIComponent).join(",");
      const params = [];
      if (q) params.push("tags=" + q);
      if (t) params.push("text=" + t);
      navigate("busca" + (params.length ? "?" + params.join("&") : ""));
    },
    toReceita: function (id, fromCollectionId) {
      navigate("receita/" + encodeURIComponent(id) + (fromCollectionId ? "?from=" + encodeURIComponent(fromCollectionId) : ""));
    },
    toCozinhar: function (id, fromCollectionId) {
      navigate("cozinhar/" + encodeURIComponent(id) + (fromCollectionId ? "?from=" + encodeURIComponent(fromCollectionId) : ""));
    },
    toFavoritos: function () {
      navigate("favoritos");
    },
    toQueroFazer: function () {
      navigate("quero-fazer");
    },
    toHistorico: function () {
      navigate("historico");
    },
  };
})();
