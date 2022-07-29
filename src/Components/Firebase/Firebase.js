import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUHExOIdc5Qd1xc_dEPNqvLqYr5dW9nLs",
    authDomain: "applestore-80c22.firebaseapp.com",
    projectId: "applestore-80c22",
    storageBucket: "applestore-80c22.appspot.com",
    messagingSenderId: "1041237087807",
    appId: "1:1041237087807:web:568594691bdcbf7697ca8a",
    measurementId: "G-Z6TZF6BS84"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();

export {provider,auth,db} ;