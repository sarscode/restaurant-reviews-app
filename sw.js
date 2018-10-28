// self.addEventListener('fetch', event => {
//   console.log(event.request);
// });

const cacheName = 'restaurant-reviews-app-v1';
// url's to save
const urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant-info.js',
  './data/restaurants.json',
  './css/styles.css',
  './js/sw-register.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

self.addEventListener('install', event => {
  // Perform install
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('cached');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  // service worker for old browsers
  event.waitUntil(
    caches.keys().then(allCaches => {
      return Promise.all(
        allCaches.map(thisCache => {
          if (thisCache !== cacheName) {
            return caches.delete(thisCache);
          }
        })
      );
    })
  );
});
