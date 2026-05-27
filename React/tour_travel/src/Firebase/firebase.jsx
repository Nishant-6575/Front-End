// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeYtS3vepSqwkLTNM3vYUCYkTy-CNgS7c",
  authDomain: "react-travel-6575.firebaseapp.com",
  projectId: "react-travel-6575",
  storageBucket: "react-travel-6575.firebasestorage.app",
  messagingSenderId: "1093089616003",
  appId: "1:1093089616003:web:19c02758ded5c791117bb6",
  measurementId: "G-5BBVKW7J70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)