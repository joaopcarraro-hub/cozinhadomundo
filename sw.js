// sw.js — cache do app inteiro para uso offline.
// Shell/dado (html/css/js/data): network-first — sempre tenta buscar a versão nova primeiro,
// só cai pro cache se estiver offline (ver isIconRequest/fetch handler abaixo). Ícones: ainda
// cache-first, sem mudança. Ao mudar arquivos existentes, suba a versão do CACHE_NAME mesmo
// assim — é o que dispara o activate/limpeza de cache antigo e o skipWaiting de uma vez.
const CACHE_NAME = "cardapio-v17";

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
  "data/derivation-dict.js",
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

// Ícones (icon-192/512): cache-first, sem mudança — imagem estática que nunca precisa de rede
// pra ficar "fresca", diferente do shell/dado abaixo.
function isIconRequest(url) {
  return url.pathname.endsWith("icons/icon-192.png") || url.pathname.endsWith("icons/icon-512.png");
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // deixa passar chamadas externas (fotos da Wikipedia etc.)

  if (isIconRequest(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  // Shell/dado (index.html, css/style.css, js/*.js, data/*.js): network-first — tenta a rede
  // primeiro, pra nunca "confiar" em código desatualizado enquanto há conexão; só cai pro
  // cache salvo se o fetch falhar de verdade (offline). Resposta nova sempre atualiza o cache
  // e é devolvida direto (sem round-trip duplo esperando o cache também).
  // cache:"no-store" é essencial aqui: sem isso, fetch(req) ainda respeitaria o cache HTTP
  // comum do navegador (Cache-Control/heurística), então um host com cache agressivo faria
  // "network-first" devolver uma resposta requentada mesmo com internet — não seria uma ida
  // de verdade à rede. new Request(req, {cache}) força a checagem: reconstrói a request com
  // o mesmo método/headers, só troca o modo de cache (mode "navigate" vira "same-origin" nessa
  // reconstrução — restrição do próprio construtor Request, sem efeito prático aqui: continua
  // same-origin, é só um pedido de HTML normal).
  const networkReq = new Request(req, { cache: "no-store" });
  event.respondWith(
    fetch(networkReq)
      .then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => {
          if (cached) return cached;
          if (req.mode === "navigate") return caches.match("index.html");
        })
      )
  );
});
