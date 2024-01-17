// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgXW1rMMaE2gAI49bdgwl2pBITmuz3lG8",
  authDomain: "rafusoft-348d5.firebaseapp.com",
  projectId: "rafusoft-348d5",
  storageBucket: "rafusoft-348d5.appspot.com",
  messagingSenderId: "678880646693",
  appId: "1:678880646693:web:0a4930f9dbfa4bcbc151cc",
  measurementId: "G-MQH37C6K2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);