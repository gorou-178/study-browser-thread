
self.addEventListener('install', event => {
    console.log('serviceWorker: install', event);
});

self.addEventListener('activate', event => {
    console.log('serviceWorker: activate', event);
});
  
self.addEventListener('fetch', event => {
    console.log('serviceWorker: fetch', event);
});
