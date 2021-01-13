const workbox = require('workbox')

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}

self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    // event.respondWith(() => {
    //     fetch(event.request)
    // }
    // );
});