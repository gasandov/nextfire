import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// firebase v9^
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

const firebaseConfig: { [key: string]: string } = {
  apiKey: "AIzaSyBvaU-ENc0GC1a-pc9JLv2hOtyMgQq1zik",
  authDomain: "nextfire-7dc82.firebaseapp.com",
  projectId: "nextfire-7dc82",
  storageBucket: "nextfire-7dc82.appspot.com",
  messagingSenderId: "70340660065",
  appId: "1:70340660065:web:b48571be4be0932a2e9320",
  measurementId: "G-MQSLT5NYXS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const storage = firebase.storage();
export const firestore = firebase.firestore();
