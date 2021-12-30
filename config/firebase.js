import * as firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgDwXP8qOB_52cJAekUEE_RHhirQqwrOc",
  authDomain: "ryoko-43b3c.firebaseapp.com",
  projectId: "ryoko-43b3c",
  storageBucket: "ryoko-43b3c.appspot.com",
  messagingSenderId: "471734118607",
  appId: "1:471734118607:web:a1ebe7379d4c729c9a6fba",
  measurementId: "G-S6H39TC8KP"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = app.auth();
const db = app.firestore();

export {app, auth, db};
