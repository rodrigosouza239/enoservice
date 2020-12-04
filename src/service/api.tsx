import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOE7xEy9UZPK1MNpdb71Tx2gTu1sYbbOE",
    authDomain: "enonautica.firebaseapp.com",
    databaseURL: "https://enonautica.firebaseio.com",
    projectId: "enonautica",
    storageBucket: "enonautica.appspot.com",
    messagingSenderId: "608377247004",
    appId: "1:608377247004:web:06b51424179cff556ed6d9",
    measurementId: "G-7YSVRBLZNC"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

 export { firebase };