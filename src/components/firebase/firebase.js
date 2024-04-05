// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDek6C_3ZVDfbsr0-PXenxWO9JjN_Whm2Q',
  authDomain: 'sky-fitness-pro-3a520.firebaseapp.com',
  databaseURL:
    'https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sky-fitness-pro-3a520',
  storageBucket: 'sky-fitness-pro-3a520.appspot.com',
  messagingSenderId: '103077240446',
  appId: '1:103077240446:web:c0df83f0940d41ad62022f',
}

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig)

export default firebase
// console.log(firebase.app().name);

// const db = firebase.firestore(app);
// console.log("firestore", db);
