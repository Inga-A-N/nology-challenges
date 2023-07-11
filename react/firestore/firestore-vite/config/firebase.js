// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkuCNJtxbsSc164b0WLWFFcGhhnnECs-s",
  authDomain: "firestore-lesson-10072023.firebaseapp.com",
  projectId: "firestore-lesson-10072023",
  storageBucket: "firestore-lesson-10072023.appspot.com",
  messagingSenderId: "106657726595",
  appId: "1:106657726595:web:2347108f206948364a1bb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
