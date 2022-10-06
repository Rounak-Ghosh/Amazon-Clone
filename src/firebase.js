import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTmCqe2VYfDwCTBZR0HintI4wQpALOy30",
  authDomain: "clone-1d623.firebaseapp.com",
  projectId: "clone-1d623",
  storageBucket: "clone-1d623.appspot.com",
  messagingSenderId: "163140028101",
  appId: "1:163140028101:web:fe5c1cc85459bb4c7e52ac",
  measurementId: "G-N7YE6KHP18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };