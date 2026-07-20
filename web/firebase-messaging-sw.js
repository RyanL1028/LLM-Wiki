/* Firebase Cloud Messaging — background push notification handler */

// Import Firebase compat from CDN in service worker context
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCYAH4ptaa5niGz3UFRlq8Q5Qt7QeIjwso",
  authDomain: "smart-study-by-ryan.firebaseapp.com",
  projectId: "smart-study-by-ryan",
  storageBucket: "smart-study-by-ryan.firebasestorage.app",
  messagingSenderId: "348796773031",
  appId: "1:348796773031:web:f5503b668b65730704b182"
});

const messaging = firebase.messaging();

// Handle background messages — show a notification
messaging.onBackgroundMessage(function(payload) {
  console.log('[sw] Received background message:', payload);

  var notification = payload.notification || {};
  var title = notification.title || 'Smart Study';
  var body = notification.body || 'You have a new message';
  var icon = notification.icon || '/assets/images/smartchatter.png';
  var tag = payload.data && payload.data.tag || 'smartstudy';

  var options = {
    body: body,
    icon: icon,
    badge: '/assets/images/smartchatter.png',
    tag: tag,
    data: payload.data || {},
    requireInteraction: false,
    actions: []
  };

  // Add a "View" action if we have a link
  if (payload.data && payload.data.link) {
    options.data = payload.data;
  }

  self.registration.showNotification(title, options);
});

// Handle notification click — open or focus the relevant page
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  var link = event.notification.data && event.notification.data.link;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
      // If we have an open tab, focus it and navigate
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          if (link) {
            client.navigate(client.url.split('#')[0] + link);
          }
          return client.focus();
        }
      }
      // Otherwise open a new window
      if (clients.openWindow) {
        var targetUrl = self.location.origin;
        if (link) targetUrl += '/' + link;
        return clients.openWindow(targetUrl);
      }
    })
  );
});
