// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDuQTEy_N6Wnfs6hqWfzUYId5l-D-yD-E4",
  authDomain: "pantrypal-eed88.firebaseapp.com",
  projectId: "pantrypal-eed88",
  storageBucket: "pantrypal-eed88.firebasestorage.app",
  messagingSenderId: "385159737560",
  appId: "1:385159737560:web:a3bda419030a4f037a67ad",
};

// Initialize Firebase app (must only run once)
const app = initializeApp(firebaseConfig);

// Export Firestore (for items, user data, etc.)
export const db = getFirestore(app);

// Export Realtime Database (for daily goals feature)
export const rtdb = getDatabase(app);