const filesToCache = [
    '/',
    '/manifest.json',
    '/resources/images/icon-192.png',
    '/resources/images/icon-512.png',
    '/resources/fonts/veteran-typewriter.ttf',
];
const hostsRequiringCaching = ['ericfortmeyer.dev-cache-v1'];
const setUpCaching = e => host => e.waitUntil(
    caches.open(host).then(cache => cache.addAll(filesToCache))
);
self.addEventListener('install', function(e) {
    hostsRequiringCaching.map(setUpCaching(e))
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then((response) => (response || fetch (e.request.url)))
    ) 
});
