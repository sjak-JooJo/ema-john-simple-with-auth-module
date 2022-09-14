// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtpJj37b8CpoBnwK9b5WBB9XSKrD6ZsQw",
  authDomain: "ema-john-simple-301ec.firebaseapp.com",
  projectId: "ema-john-simple-301ec",
  storageBucket: "ema-john-simple-301ec.appspot.com",
  messagingSenderId: "594970424851",
  appId: "1:594970424851:web:a5137ab4d10f853fc371e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;