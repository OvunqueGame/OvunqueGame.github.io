// serve solo a rendere il gioco installabile: non memorizza nulla, così gli aggiornamenti arrivano subito
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
