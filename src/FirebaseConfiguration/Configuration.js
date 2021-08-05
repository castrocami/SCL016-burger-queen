// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseInit = () =>{
var firebaseConfig = {
    apiKey: "AIzaSyAosleEK0trYzSw03nMQ_JvjawF4IL0gbw",
    authDomain: "burger-queen-58a6d.firebaseapp.com",
    projectId: "burger-queen-58a6d",
    storageBucket: "burger-queen-58a6d.appspot.com",
    messagingSenderId: "201442923765",
    appId: "1:201442923765:web:082b0eb8e26c18f01261bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
};