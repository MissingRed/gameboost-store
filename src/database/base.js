import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDjA4BS12QJ7mV7E0gzf8s3pVxmC2G644w",
  authDomain: "gameboost-e511a.firebaseapp.com",
  projectId: "gameboost-e511a",
  storageBucket: "gameboost-e511a.appspot.com",
  messagingSenderId: "548417256897",
  appId: "1:548417256897:web:834e40e5814a2cf21bc340",
});

export default app;
export const db = app.firestore();
export const storage = app.storage();
