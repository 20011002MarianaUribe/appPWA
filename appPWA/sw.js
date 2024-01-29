self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('app-lista-videos').then((cache) => {
        return cache.addAll([
          '.',
          'index.html',
          'manifest.json',
          'vendor/bootstrap-5.2.3-dist/css/bootstrap.min.css',
          'img/react.png',
          'js/listavideos.js'
          // Agrega más rutas si tienes más archivos estáticos
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  