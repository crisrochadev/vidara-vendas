import { boot } from 'quasar/wrappers'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import {
  getDatabase, ref, set, child, push, update, onValue
} from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import moment from './date'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYn3TRet0CblvKLvNyAd4vfMqnn4Apevw",
  authDomain: "vidara-1e7fb.firebaseapp.com",
  projectId: "vidara-1e7fb",
  storageBucket: "vidara-1e7fb.appspot.com",
  messagingSenderId: "243089139726",
  appId: "1:243089139726:web:2ce785ae9145d2e093f45f",
  measurementId: "G-RFLEBD6MSD",
  databaseURL: "https://vidara-1e7fb-default-rtdb.firebaseio.com"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut };
export const db = {getDatabase, ref, set, child, push, update, onValue}

export async function authUser() {
  const auth = getAuth();
  return await new Promise(resolve => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
      } else {
        resolve(null)
      }
    })
  });
}



