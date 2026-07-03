// sw.js — cache do app inteiro para uso offline.
// Ao mudar arquivos existentes, suba a versão do CACHE_NAME para forçar atualização.
const CACHE_NAME = "cardapio-v6";

const APP_SHELL = [
  "./",
  "index.html",
  "manifest.json",
  "css/style.css",
  "js/categories.js",
  "js/tags.js",
  "js/collections.js",
  "js/tagmodel.js",
  "js/storage.js",
  "js/search.js",
  "js/router.js",
  "js/app.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "data/molhos-classicos.js",
  "data/sopas.js",
  "data/entradas-frias.js",
  "data/entradas-quentes.js",
  "data/massas.js",
  "data/risotos.js",
  "data/ovos-basicos.js",
  "data/ovos-classicos.js",
  "data/padaria.js",
  "data/sobremesas-classicas.js",
  "data/contemporaneos.js",
  "data/tecnicas-contemporaneas-2.js",
  "data/aves.js",
  "data/carnes-bovinas.js",
  "data/cordeiro.js",
  "data/suinos.js",
  "data/peixes.js",
  "data/frutos-do-mar.js",
  "data/arrozes.js",
  "data/brasileiros.js",
  "data/brasil-regional.js",
  "data/franca.js",
  "data/italia.js",
  "data/espanha.js",
  "data/portugal.js",
  "data/japao.js",
  "data/china.js",
  "data/coreia.js",
  "data/tailandia.js",
  "data/india.js",
  "data/mexico.js",
  "data/peru.js",
  "data/alemanha.js",
  "data/austria.js",
  "data/hungria.js",
  "data/grecia.js",
  "data/marrocos.js",
  "data/libano.js",
  "data/eua.js",
  "data/dinamarca.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // deixa passar chamadas externas (fotos da Wikipedia etc.)

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          if (req.mode === "navigate") return caches.match("index.html");
        });
    })
  );
});
