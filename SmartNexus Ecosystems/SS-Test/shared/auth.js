/* ===== Shared Auth Functions ===== */

function getSession() { return appSession; }

async function doSignup(username, password, role, email, recaptchaToken) {
  try {
    const authEmail = email || (username + '@smartstudy.local');
    const cred = await auth.createUserWithEmailAndPassword(authEmail, password);

    const existing = await db.collection('users').where('username', '==', username).get();
    if (!existing.empty) {
      await auth.signOut();
      return 'Username already exists.';
    }

    const isUsernameOnly = !email;
    await db.collection('users').doc(cred.user.uid).set({
      username, role, email: email || null,
      status: isUsernameOnly ? 'pending' : 'active',
      created: toUTC8().toISOString().slice(0, 10),
      recaptchaToken: recaptchaToken || ''
    });

    await db.collection('usernameLookup').doc(username).set({
      email: authEmail
    });

    if (isUsernameOnly) {
      await auth.signOut();
      return 'pending';
    }
    return null;
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') return 'Email already registered.';
    if (e.code === 'auth/weak-password') return 'Password must be at least 6 characters.';
    return e.message;
  }
}

async function doLogin(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return null;
  } catch (e) {
    if (e.code === 'auth/user-not-found') return 'No account found with that email.';
    if (e.code === 'auth/wrong-password') return 'Incorrect password.';
    if (e.code === 'auth/invalid-email') return 'Invalid email address.';
    return e.message;
  }
}

async function signInWithGoogle() {
  try {
    await auth.signInWithPopup(googleProvider);
    window.location.hash = APP_CONFIG.defaultRedirect;
  } catch (e) {
    if (e.code === 'auth/popup-closed-by-user') return;
    var el = document.getElementById('login-error') || document.getElementById('signup-error');
    if (el) el.textContent = e.message;
  }
}

async function signInWithMicrosoft() {
  try {
    await auth.signInWithPopup(microsoftProvider);
    window.location.hash = APP_CONFIG.defaultRedirect;
  } catch (e) {
    if (e.code === 'auth/popup-closed-by-user') return;
    var el = document.getElementById('login-error') || document.getElementById('signup-error');
    if (el) el.textContent = e.message;
  }
}

async function signInWithYahoo() {
  try {
    await auth.signInWithPopup(yahooProvider);
    window.location.hash = APP_CONFIG.defaultRedirect;
  } catch (e) {
    if (e.code === 'auth/popup-closed-by-user') return;
    var el = document.getElementById('login-error') || document.getElementById('signup-error');
    if (el) el.textContent = e.message;
  }
}

async function doLogout() {
  await auth.signOut();
  appSession = null;
  if (getRoute() === 'home') { route(); }
  else { window.location.hash = '#home'; }
}

function requireAuth() {
  if (!appSession) { window.location.hash = '#login'; return false; }
  return true;
}

function hasSubRank(session, rank) {
  if (!session || !session.subRanks) return false;
  return session.subRanks.includes(rank);
}

function isTeacherOrAbove(session) {
  if (!session) return false;
  return session.role === 'teacher' || session.role === 'admin' || session.role === 'mainadmin' || session.role === 'ultimateadmin';
}

function isAdminOrAbove(session) {
  if (!session) return false;
  return session.role === 'admin' || session.role === 'mainadmin' || session.role === 'ultimateadmin';
}

function requireTeacher() {
  var s = getSession();
  if (!s || !isTeacherOrAbove(s)) { window.location.hash = '#home'; return false; }
  return true;
}

function requireAdmin() {
  var s = getSession();
  if (!s || !isAdminOrAbove(s)) { window.location.hash = '#home'; return false; }
  return true;
}

function requireUltimateAdmin() {
  var s = getSession();
  if (!s || s.role !== 'ultimateadmin') { window.location.hash = '#home'; return false; }
  return true;
}
