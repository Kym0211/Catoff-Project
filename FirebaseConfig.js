// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdw9yYyRSJAlU4W6m61ZeugAsEm4IPqco",
  authDomain: "game-kym.firebaseapp.com",
  projectId: "game-kym",
  storageBucket: "game-kym.appspot.com",
  messagingSenderId: "1011628428150",
  appId: "1:1011628428150:web:1427ed59281ffc0a9ac857",
  measurementId: "G-816T4PE2BN"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);