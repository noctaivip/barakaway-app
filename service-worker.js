/* BarakaWay Service Worker
   Aggressive update mode for GitHub Pages / active PWA testing.
   HTML, JS and CSS are always fetched from network with cache reload/no-store.
*/

const CACHE_VERSION = '20260510-night-mosque-carbon-logic-final-1';
const CACHE_NAME = `barakaway-runtime-${CACHE_VERSION}`;

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function isSameOrigin(request) {
  try { return new URL(request.url).origin === self.location.origin; }
  catch (e) { return false; }
}

function isFreshAsset(request) {
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase();
  return (
    request.mode === 'navigate' ||
    path.endsWith('.html') ||
    path.endsWith('.js') ||
    path.endsWith('.css') ||
    path === '/' ||
    path === '/bottom-nav.js' ||
    path === '/theme-init.js' ||
    path === '/theme-toggle.js' ||
    path === '/theme-universal.css' ||
    path === '/service-worker.js'
  );
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !isSameOrigin(request)) return;

  if (isFreshAsset(request)) {
    event.respondWith(
      fetch(request, { cache: 'reload' })
        .catch(() => fetch(request, { cache: 'no-store' }))
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    fetch(request, { cache: 'default' })
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => undefined);
        return response;
      })
      .catch(() => caches.match(request))
  );
});
