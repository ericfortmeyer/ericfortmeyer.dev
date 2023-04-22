const filesToCache = [
    '/manifest.json',
    '/resources/images/icon-192.png',
    '/resources/images/icon-512.png',
    '/resources/images/IMG_7563.webp',
    '/resources/fonts/veteran-typewriter.ttf',
    '/resources/stylesheets/style.min.css',
    '/resources/js/clock.js',
    '/resources/js/hodiProjectData.js',
    '/resources/js/loadSW.js',
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
