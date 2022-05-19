// const version = "0.0.1";
// const cacheName = `snippetSaver-${version}`;
// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       return cache.addAll([`/`]).then(() => self.skipWaiting());
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener("fetch", (event) => {
//   if (event.request.method.toLowerCase() !== "get") {
//     return;
//   }

//   event.respondWith(
//     caches
//       .open(cacheName)
//       .then((cache) => cache.match(event.request, { ignoreSearch: false }))
//       .then((response) => {
//         return response || fetch(event.request);
//       })
//   );
// });
