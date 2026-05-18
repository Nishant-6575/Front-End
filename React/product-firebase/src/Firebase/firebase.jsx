// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5bs1LHF7uz2X2Mf9OutLiJH0yWMT7Aek",
  authDomain: "react-product-70c88.firebaseapp.com",
  projectId: "react-product-70c88",
  storageBucket: "react-product-70c88.firebasestorage.app",
  messagingSenderId: "225583052905",
  appId: "1:225583052905:web:2e55fc7e490c4dd235caf8",
  measurementId: "G-P74Y3KV3WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)