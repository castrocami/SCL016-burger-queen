// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseInit = () =>{
var firebaseConfig = {
    apiKey: "AIzaSyAAnE6zSm6izr87XlPP3cyzlqnTligSCHk",
    authDomain: "burger-queen-38686.firebaseapp.com",
    projectId: "burger-queen-38686",
    storageBucket: "burger-queen-38686.appspot.com",
    messagingSenderId: "448075553648",
    appId: "1:448075553648:web:3e4afa482a5c96dee90db5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
};