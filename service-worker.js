/* BarakaWay Service Worker
   Development / fast-update mode for active PWA testing.
   Goal: always prefer the newest files from the network, especially HTML/JS/CSS.
*/

const CACHE_VERSION = '20260513-pro-glow-inline-home-v1';
const CACHE_NAME = `barakaway-runtime-${CACHE_VERSION}`;

const APP_SHELL = [
  '/',
  '/favicon.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL).catch(() => undefined);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch (e) {
    return false;
  }
}

function isFreshAsset(request) {
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase();

  return (
    request.mode === 'navigate' ||
    path.endsWith('.html') ||
    path.endsWith('.js') ||
    path.endsWith('.css') ||
    path.endsWith('.webp') ||
    path === '/bottom-nav.js' ||
    path === '/theme-init.js' ||
    path === '/theme.css' ||
    path === '/theme-toggle.js' ||
    path === '/theme-universal.css' ||
    path === '/service-worker.js'
  );
}

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET' || !isSameOrigin(request)) {
    return;
  }

  if (isFreshAsset(request)) {
    event.respondWith(
      fetch(request, { cache: 'reload' })
        .then(response => response)
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => undefined);
        return response;
      })
      .catch(() => caches.match(request))
  );
});
