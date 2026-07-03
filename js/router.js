// router.js — navegação baseada em hash (#/...), sem depender de servidor.
// Rotas: home | categoria/:id | busca/:query | receita/:catId/:nome
(function () {
  const listeners = [];

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { name: "home" };

    const parts = raw.split("/").map(function (p) {
      try {
        return decodeURIComponent(p);
      } catch (e) {
        return p;
      }
    });

    if (parts[0] === "categoria" && parts[1]) {
      return { name: "categoria", catId: parts[1] };
    }
    if (parts[0] === "busca") {
      return { name: "busca", query: parts.slice(1).join("/") || "" };
    }
    if (parts[0] === "receita" && parts[1] && parts[2]) {
      return { name: "receita", catId: parts[1], recipeName: parts[2] };
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
    toCategoria: function (catId) {
      navigate("categoria/" + encodeURIComponent(catId));
    },
    toBusca: function (query) {
      navigate("busca/" + encodeURIComponent(query));
    },
    replaceBusca: function (query) {
      replace("busca/" + encodeURIComponent(query));
    },
    toReceita: function (catId, name) {
      navigate("receita/" + encodeURIComponent(catId) + "/" + encodeURIComponent(name));
    },
  };
})();
