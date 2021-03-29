const filesToCache = [
    './manifest.json',
    './resources/css/style.min.css',
    './resources/images/icon.png',
    './resources/images/icon-192.png',
    './resources/images/icon-512.png',
    './resources/images/proautocleaners.webp',
    './resources/images/proautocleaners.jp2',
    './resources/images/pioneercleaning.webp',
    './resources/images/pioneercleaning.jp2',
    './resources/images/scheduler.webp',
    './resources/images/scheduler.jp2',
    './resources/fonts/veteran-typewriter.ttf',
];
const hostsRequiringCaching = ['ericfortmeyer.dev', 'iam.ericfortmeyer.dev', 'www.ericfortmeyer.dev', 'localhost'];
const setUpCaching = e => host => e.waitUntil(
    caches.open(host).then(cache => cache.addAll(filesToCache))
);
self.addEventListener('install', function(e) {
    hostsRequiringCaching.map(setUpCaching(e))
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then((response) => (
            response || fetch(e.request)
        ))
    ) 
});
