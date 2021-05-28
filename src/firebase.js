import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsjjPzyMvITStF3OBdMIc-evT4-9KdglI",
  authDomain: "netflix-by-hk.firebaseapp.com",
  projectId: "netflix-by-hk",
  storageBucket: "netflix-by-hk.appspot.com",
  messagingSenderId: "247280669701",
  appId: "1:247280669701:web:8f74d8d25d081c7e0f386c",
  measurementId: "G-1GW0DKDM86",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
