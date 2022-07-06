// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfnxwm9BoHzfIVIPKvfc_vTq2Y8DEVxW0",
  authDomain: "ema-john-9c4d4.firebaseapp.com",
  projectId: "ema-john-9c4d4",
  storageBucket: "ema-john-9c4d4.appspot.com",
  messagingSenderId: "71379069011",
  appId: "1:71379069011:web:1f1acc4dc0c8cd1a6bbea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
