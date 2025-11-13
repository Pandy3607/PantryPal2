// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn7NaTYFYH3qzfRTqpwJXWByRaaqwV-94",
  authDomain: "pantrypal2-5f0d2.firebaseapp.com",
  projectId: "pantrypal2-5f0d2",
  storageBucket: "pantrypal12-5f0d2.appspot.com",
  messagingSenderId: "15254245171",
  appId: "1:15254245171:web:6a604884fc57e3a7acf846",
  measurementId: "G-VPNDMH93QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);