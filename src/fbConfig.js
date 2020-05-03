import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
  apiKey: "AIzaSyD5ZNcfNUwF95ck0Hh_JkA-chJqINV6tR0",
  authDomain: "sleellow-a5745.firebaseapp.com",
  databaseURL: "https://sleellow-a5745.firebaseio.com",
  projectId: "sleellow-a5745",
  storageBucket: "sleellow-a5745.appspot.com",
  messagingSenderId: "141651891744",
  appId: "1:141651891744:web:56487d6b9289a4414f4e45",
  measurementId: "G-NGYXTM2QJM",
};

firebase.initializeApp(fbConfig);

export default firebase;
