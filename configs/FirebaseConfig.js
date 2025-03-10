// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEQmQbMIlmeSkElurLA-FnAe60gjp2vs",
  authDomain: "travel-gemini.firebaseapp.com",
  projectId: "travel-gemini",
  storageBucket: "travel-gemini.appspot.com",
  messagingSenderId: "29108384795",
  appId: "1:29108384795:web:9d0879d2fbc1500c31f4be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);