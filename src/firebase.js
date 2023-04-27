
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt39t15P8hpjGASbQtanOUu7xFsR1HI30",
  authDomain: "myhotstarclone.firebaseapp.com",
  projectId: "myhotstarclone",
  storageBucket: "myhotstarclone.appspot.com",
  messagingSenderId: "70418413957",
  appId: "1:70418413957:web:12c220ffe134f6cf99acec",
  measurementId: "G-8NYWC4CM6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);