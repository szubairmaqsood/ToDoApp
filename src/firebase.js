// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
    apiKey: "AIzaSyD-wy6EHo11AG7J5MgABFVTaNUKHu4aAtQ",
    authDomain: "to-do-app-clone-49d20.firebaseapp.com",
    projectId: "to-do-app-clone-49d20",
    storageBucket: "to-do-app-clone-49d20.appspot.com",
    messagingSenderId: "76203809218",
    appId: "1:76203809218:web:ff84b6ae82d503dc22de5b",
    measurementId: "G-SCSTY41D6G"
  };

*/

import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyD-wy6EHo11AG7J5MgABFVTaNUKHu4aAtQ",
    authDomain: "to-do-app-clone-49d20.firebaseapp.com",
    projectId: "to-do-app-clone-49d20",
    storageBucket: "to-do-app-clone-49d20.appspot.com",
    messagingSenderId: "76203809218",
    appId: "1:76203809218:web:ff84b6ae82d503dc22de5b",
    measurementId: "G-SCSTY41D6G"
    
});

const db=firebaseApp.firestore();
export default db;