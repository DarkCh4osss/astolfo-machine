import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYj1MMBttkxDZ6DsBLDNrzAlVNgVh54b8",
  authDomain: "test-slot-mac-a358f.firebaseapp.com",
  projectId: "test-slot-mac-a358f",
  storageBucket: "test-slot-mac-a358f.appspot.com",
  messagingSenderId: "697366630767",
  appId: "1:697366630767:web:87660efa509dd03f7d589a",
  measurementId: "G-ZBG1FM3V9V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
