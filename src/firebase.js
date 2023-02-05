// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqQ6u9vXITVkByNOwJ5r2p_5ppL9SUtQc",
  authDomain: "clone-kdiffin.firebaseapp.com",
  projectId: "clone-kdiffin",
  storageBucket: "clone-kdiffin.appspot.com",
  messagingSenderId: "398637822288",
  appId: "1:398637822288:web:8ec84e7e9c319f4ec87c55",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db as firebaseDb, auth as firebaseAuth, provider as firebaseProvider };
