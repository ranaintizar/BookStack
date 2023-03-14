import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClkwwJgMrACFo2wGmvOo8KKR0NAeYCZrA",
  authDomain: "bookstack-7bc4a.firebaseapp.com",
  projectId: "bookstack-7bc4a",
  storageBucket: "bookstack-7bc4a.appspot.com",
  messagingSenderId: "871788597058",
  appId: "1:871788597058:web:3a2e29a44fa2c26919c2db",
  measurementId: "G-N9L758FXQC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
