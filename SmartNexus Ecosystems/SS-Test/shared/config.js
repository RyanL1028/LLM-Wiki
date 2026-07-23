/**
 * =============================================================================
 * shared/config.js — App Backbone
 * =============================================================================
 *
 * This file is loaded FIRST by every page (index.html, chat.html, staff.html).
 * It handles:
 *   1. Firebase SDK initialization (Auth, Firestore, Storage)
 *   2. Auth providers setup (Google, Microsoft, Phone)
 *   3. LocalStorage helper (LS.get / LS.set)
 *   4. Notification system (in-app bell + FCM push)
 *   5. Dropdown/utility helpers
 *
 * Global variables created here (available to all other scripts):
 *   db        — Firestore instance
 *   auth      — Firebase Auth instance
 *   storage   — Firebase Storage instance
 *   LS        — localStorage wrapper with prefix & JSON serialization
 *   appSession — current user session (set by auth.js after login)
 *   _usersCache — cached user list for display names
 */

/* ===== Firebase Init ===== */
const firebaseConfig = {
  apiKey: "AIzaSyCYAH4ptaa5niGz3UFRlq8Q5Qt7QeIjwso",
  authDomain: "smart-study-by-ryan.firebaseapp.com",
  projectId: "smart-study-by-ryan",
  storageBucket: "smart-study-by-ryan.firebasestorage.app",
  messagingSenderId: "348796773031",
  appId: "1:348796773031:web:f5503b668b65730704b182"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

if (APP_CONFIG.setPersistence) {
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
if (APP_CONFIG.wikiBase) {
  window.WIKI_BASE = APP_CONFIG.wikiBase;
}
if (APP_CONFIG.app !== 'chat' && typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

/* ===== Auth Providers ===== */
const googleProvider = new firebase.auth.GoogleAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
microsoftProvider.setCustomParameters({ tenant: 'common' });
const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
yahooProvider.setCustomParameters({ prompt: 'login' });

if (APP_CONFIG.providers.includes('phone')) {
  var _phoneVerificationId = null;
  var _phoneRecaptchaVerifier = null;
}

/* ===== State & Utilities ===== */
const LS = {
  get(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

let appSession = null;
let _usersCache = null;

/* ===== Notifications ===== */
/**
 * ===== In-App Notification System =====
 * Notifications are stored in localStorage as an array of:
 *   { type, text, link, time, read }
 * The bell icon in the topbar shows unread count.
 * On new messages/events, addNotification() is called.
 */

function getNotifications() { return LS.get(APP_CONFIG.storagePrefix + '_notifications', []); }
function saveNotifications(arr) {
  LS.set(APP_CONFIG.storagePrefix + '_notifications', arr.slice(-30));
  updateNotifBadge();
}
function addNotification(type, text, link) {
  const arr = getNotifications();
  arr.push({ type, text, link, time: Date.now(), read: false });
  saveNotifications(arr);
}
function clearNotifications() {
  const arr = getNotifications();
  arr.forEach(n => n.read = true);
  saveNotifications(arr);
}
function unreadCount() { return getNotifications().filter(n => !n.read).length; }
function updateNotifBadge() {
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  const n = unreadCount();
  if (n > 0) { badge.style.display = ''; badge.textContent = n > 99 ? '99+' : n; }
  else { badge.style.display = 'none'; }
}
function buildNotificationHtml() {
  const arr = getNotifications();
  let html = '';
  // Show enable push button if permission not yet asked (and FCM is available)
  if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
    html += '<button class="topbar-dropdown-item" onclick="enablePushNotifications().then(function(){ closeAllDropdowns(); route(); })" style="text-align:center;color:var(--accent);font-weight:600;font-size:0.82rem;width:100%">🔔 Enable Push Notifications</button>';
    if (arr.length) html += '<div class="topbar-dropdown-sep"></div>';
  }
  if (!arr.length) {
    html += '<div style="padding:16px;text-align:center;color:var(--muted);font-size:0.85rem">No notifications yet.</div>';
    return html;
  }
  arr.slice(-20).reverse().forEach(n => {
    const icon = n.type === 'homework' ? '📝' : n.type === 'reply' ? '💬' : n.type === 'blog' ? '📰' : '🔔';
    const time = new Date(n.time);
    const timeStr = time.toLocaleDateString() + ' ' + time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    html += `<a class="topbar-dropdown-item" href="${n.link || '#'}" onclick="event.preventDefault();${n.link && n.link.startsWith('#') ? "navigateTo('" + n.link + "')" : "window.location.href='" + (n.link || '#') + "'"};closeAllDropdowns()" style="display:flex;gap:8px;align-items:flex-start;${n.read ? '' : 'background:#eff6ff;font-weight:600'}">
      <span style="font-size:1rem;flex-shrink:0">${icon}</span>
      <div><div style="font-size:0.82rem">${n.text}</div><div style="font-size:0.68rem;color:var(--muted)">${timeStr}</div></div>
    </a>`;
  });
  if (unreadCount() > 0) {
    html += '<div class="topbar-dropdown-sep"></div>';
    html += '<button class="topbar-dropdown-item" onclick="clearNotifications();closeAllDropdowns();renderTopbar()" style="text-align:center;color:var(--muted);font-size:0.78rem">Mark all as read</button>';
  }
  return html;
}

/**
 * ===== FCM Push Notifications =====
 *
 * Firebase Cloud Messaging enables notifications even when the browser is closed.
 * Flow:
 *   1. User clicks "Enable Push Notifications" (must be a user gesture)
 *   2. Browser prompts for permission
 *   3. FCM token is generated and stored in Firestore (fcmTokens/{uid})
 *   4. Background messages are handled by firebase-messaging-sw.js
 *   5. Foreground messages show a toast + in-app notification
 *
 * VAPID key must be set in APP_CONFIG.fcmVapidKey (from Firebase Console).
 */
var _fcmMessaging = null;
var _fcmToken = null;

function initFCM() {
  if (typeof firebase === 'undefined' || !firebase.messaging) return;
  _fcmMessaging = firebase.messaging();
}

async function enablePushNotifications() {
  initFCM();
  if (!_fcmMessaging) { alert('Push notifications are not supported in this browser.'); return; }

  try {
    var perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      alert('Please allow notifications in your browser settings to receive push notifications.');
      return;
    }
  } catch(e) {
    alert('Could not request notification permission. Check your browser settings.');
    return;
  }

  var vapidKey = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.fcmVapidKey) || '';
  if (!vapidKey) {
    console.warn('FCM VAPID key not configured. Add fcmVapidKey to APP_CONFIG.');
    return;
  }

  try {
    var token = await _fcmMessaging.getToken({ vapidKey: vapidKey });
    if (token) {
      _fcmToken = token;
      if (typeof appSession !== 'undefined' && appSession && appSession.uid && typeof db !== 'undefined') {
        await db.collection('fcmTokens').doc(appSession.uid).set({
          token: token,
          platform: 'web',
          updated: Date.now()
        }, { merge: true });
      }
    }
  } catch(e) {
    console.error('FCM token error:', e.message);
  }
}

function handleForegroundMessages() {
  if (!_fcmMessaging) return;
  _fcmMessaging.onMessage(function(payload) {
    var notif = payload.notification || {};
    var title = notif.title || 'Smart Study';
    var body = notif.body || '';
    var link = (payload.data && payload.data.link) || '#home';

    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try {
        new Notification(title, { body: body, icon: '/assets/images/smartstudylogo.svg', tag: payload.data && payload.data.tag || 'smartstudy' });
      } catch(e) {}
    }

    if (typeof addNotification === 'function') {
      addNotification('reply', body, link);
    }
  });
}

function autoRegisterFCM() {
  initFCM();
  if (typeof Notification !== 'undefined' && Notification.permission === 'granted' &&
      typeof appSession !== 'undefined' && appSession && appSession.uid) {
    enablePushNotifications().catch(function(e) {
      console.warn('Auto FCM registration failed:', e.message);
    });
  }
  handleForegroundMessages();
}

/* ===== Helper: navigate & dropdown ===== */
function getRoute() { return window.location.hash.slice(1) || 'home'; }
let openDropdown = null;
