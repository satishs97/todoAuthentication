import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3FZtKyTgvuC2zrvflVJxCmtyOP0pu0bk",
  authDomain: "todos-auth-dbf7b.firebaseapp.com",
  databaseURL: "https://todos-auth-dbf7b.firebaseio.com",
  projectId: "todos-auth-dbf7b",
  storageBucket: "todos-auth-dbf7b.appspot.com",
  messagingSenderId: "273969417612",
  appId: "1:273969417612:web:39dc19208ab915b5bb9aa9",
  measurementId: "G-MSLDP7NX40",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
