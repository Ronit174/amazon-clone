import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZskm4km0wtdbtj2AWWpAXp9jTKin5e4",
  authDomain: "clone-9a9f0.firebaseapp.com",
  databaseURL: "https://clone-9a9f0.firebaseio.com",
  projectId: "clone-9a9f0",
  storageBucket: "clone-9a9f0.appspot.com",
  messagingSenderId: "1079508198322",
  appId: "1:1079508198322:web:d6988efcd95af0169d7aab",
  measurementId: "G-K2WCJ52TZP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };