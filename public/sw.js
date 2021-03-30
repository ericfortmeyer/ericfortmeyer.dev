const filesToCache = [
    '/manifest.json',
    '/resources/images/icon-192.png',
    '/resources/images/icon-512.png',
    '/resources/fonts/veteran-typewriter.ttf',
];
const hostsRequiringCaching = ['ericfortmeyer.dev-v1'];
const setUpCaching = e => host => e.waitUntil(
    caches.open(host).then(cache => cache.addAll(filesToCache), console.log)
);
self.addEventListener('install', function(e) {
    hostsRequiringCaching.map(setUpCaching(e))
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) {
                console.log(response);
                return response;
            }
            console.log(e);
            return fetch (e.request);
        }, console.log)
    ) 
});
