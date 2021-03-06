import firebase from "firebase";


import 'firebase/auth'
import 'firebase/database'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCodjAt-UhqQRdrvTgPP0hxph6c0V0K-G4",
    authDomain: "chatby-dec51.firebaseapp.com",
    databaseURL: "https://chatby-dec51-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatby-dec51",
    storageBucket: "chatby-dec51.appspot.com",
    messagingSenderId: "617454810424",
    appId: "1:617454810424:web:996cf78b83e82f0ab1fdcd"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();
  let firebaseDb = firebaseApp.database();

  export { firebaseAuth, firebaseDb }