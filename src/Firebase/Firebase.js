import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0PtmPwxOYaAKnGpk9W6NbqmBNGkskpUg",
    authDomain: "todos-auth-f0900.firebaseapp.com",
    databaseURL: "https://todos-auth-f0900.firebaseio.com",
    projectId: "todos-auth-f0900",
    storageBucket: "todos-auth-f0900.appspot.com",
    messagingSenderId: "831631056184",
    appId: "1:831631056184:web:8cecf7a37651436a1035cd",
    measurementId: "G-64QWLVKM7K"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
