var cacheName = 'menu-cache-v1';
var urlsToCache = [
  '/',
  'styles.css',
  'index.html',
  // Add any other resources you want to cache (e.g., images, additional stylesheets)
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
