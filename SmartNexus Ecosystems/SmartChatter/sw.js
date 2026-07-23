const CACHE = 'smartchatter-v1';
// Don't cache HTML — always fetch fresh
const URLS = ['/assets/images/smartchatter.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never cache HTML pages — always network-first
  if (e.request.destination === 'document' || e.request.url.endsWith('.html') || e.request.url.endsWith('/') || e.request.url.includes('index')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
