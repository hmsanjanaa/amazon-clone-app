import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAS6RfdjZFauXnJaSaWRknDAfAsbrLyJAs",
  authDomain: "clone-8fb1a.firebaseapp.com",
  databaseURL: "https://clone-8fb1a-default-rtdb.firebaseio.com",
  projectId: "clone-8fb1a",
  storageBucket: "clone-8fb1a.appspot.com",
  messagingSenderId: "1045794092129",
  appId: "1:1045794092129:web:e3d71a1f5aa637996be620"
});

const db = firebaseApp.firestore();
const auth =  firebase.auth();

export {db, auth};