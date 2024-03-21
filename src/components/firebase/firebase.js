// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC07W8gEHPHqQ1WLX0f8RnkyZ1kP1IpH8s",
    authDomain: "fitness-pro-604a8.firebaseapp.com",
    databaseURL: "https://fitness-pro-604a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitness-pro-604a8",
    storageBucket: "fitness-pro-604a8.appspot.com",
    messagingSenderId: "522804164082",
    appId: "1:522804164082:web:56728020ec99022912a76b"
};


// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// console.log(firebase.app().name);

// const db = firebase.firestore(app);
// console.log("firestore", db);