import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD7jW7h5tc_PkQn9I3cMvO4yu6yGBT6-Kk",
    authDomain: "clone-5e0c0.firebaseapp.com",
    projectId: "clone-5e0c0",
    storageBucket: "clone-5e0c0.appspot.com",
    messagingSenderId: "143707086768",
    appId: "1:143707086768:web:40e90c79ffa133d2868075",
    measurementId: "G-90D9ST2NLY"
  });

  const auth = firebase.auth();

  export {auth};