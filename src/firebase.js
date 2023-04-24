

import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB9-LZguxuElQ_jLqAMorTWJxnI0DFwkkQ",
    authDomain: "hotstarclone-f8790.firebaseapp.com",
    projectId: "hotstarclone-f8790",
    storageBucket: "hotstarclone-f8790.appspot.com",
    messagingSenderId: "571992677090",
    appId: "1:571992677090:web:be05bc9c4607874f3e1cbb",
    measurementId: "G-15BL4XJ78P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase