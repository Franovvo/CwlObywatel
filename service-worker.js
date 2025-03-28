const CACHE_NAME = "pwa-documents-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/script.js",
  "/orzeu.jpg",
  "/notif.jpg",
  "/maintlo.jpg",
  "/bezpieczenstwo.jpeg",
  "/autko.jpeg",
  "/tarcza.jpeg",
  "/teczka.jpeg",
  "/policja.jpeg",
  "/bontowarowy.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

