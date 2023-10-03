// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgf7L9tFAUPWSbv5AFJjpQ0rl24_yzBD4",
  authDomain: "form-validation-firebase-467a0.firebaseapp.com",
  projectId: "form-validation-firebase-467a0",
  storageBucket: "form-validation-firebase-467a0.appspot.com",
  messagingSenderId: "803673025801",
  appId: "1:803673025801:web:e5267eee6e2d528e2bf7d8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
