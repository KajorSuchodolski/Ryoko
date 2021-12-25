import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKjRPvv63hnQwdnlrphtMWatqmMXwVuaU",
  authDomain: "ryoko-130ba.firebaseapp.com",
  projectId: "ryoko-130ba",
  storageBucket: "ryoko-130ba.appspot.com",
  messagingSenderId: "182117583600",
  appId: "1:182117583600:web:d886bc39f0fb166aba5035",
  measurementId: "G-T4V8BZJKXS"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const auth = firebase.auth()

export {auth}
