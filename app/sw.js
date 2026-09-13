const CACHE = 'mr-coach-DEV_VERSION-02';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./engine.js','./content.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));});
self.addEventListener('activate', e => {e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('mr-coach-') && k !== CACHE).map(k => caches.delete(k)))));});
self.addEventListener('message', e => {if (e.data === 'ACTIVATE_UPDATE') self.skipWaiting();});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  // Coherent version: cached shell and modules are activated together, avoiding mixed releases.
  e.respondWith(caches.open(CACHE).then(async c => (await c.match(e.request, {ignoreSearch:true})) || fetch(e.request)));
});

