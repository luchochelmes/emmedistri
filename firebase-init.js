// Firebase setup shared by index.html (storefront) and admin.html (backoffice).
// Loaded as plain <script> tags (compat SDK) before support.js, so `firebase`,
// `window.db` and `window.auth` are ready by the time the dc-script runs.
const firebaseConfig = {
  apiKey: "AIzaSyDneF-z0VFa-wJD9l6SDXv4GO2resKCqGU",
  authDomain: "emmedistri.firebaseapp.com",
  projectId: "emmedistri",
  storageBucket: "emmedistri.firebasestorage.app",
  messagingSenderId: "1049419089861",
  appId: "1:1049419089861:web:e78b38514d479edbcf2dac"
};
firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
window.auth = firebase.auth();
if (firebase.storage) window.storage = firebase.storage();
