import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyAtrXWVPGqrLxkiwjRavuh1jVL_bWE-6J0",
    authDomain: "react-spa-219dc.firebaseapp.com",
    databaseURL: "https://react-spa-219dc-default-rtdb.firebaseio.com",
    projectId: "react-spa-219dc",
    storageBucket: "react-spa-219dc.appspot.com",
    messagingSenderId: "670571352890",
    appId: "1:670571352890:web:39e07bee2b203a9cca7603",
    measurementId: "G-C1X4C7CJQT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;