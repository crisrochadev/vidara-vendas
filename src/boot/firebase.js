import { boot } from 'quasar/wrappers'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,onAuthStateChanged } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUPbZ4WzCd_Ao8FG-BdVIHKX5MXHNeatQ",
  authDomain: "vidaralumiere.firebaseapp.com",
  projectId: "vidaralumiere",
  storageBucket: "vidaralumiere.appspot.com",
  messagingSenderId: "230519588027",
  appId: "1:230519588027:web:490632879fe4ea5d35159e",
  measurementId: "G-J649BLGWYN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut };

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
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.config.globalProperties.$auth = auth
})
