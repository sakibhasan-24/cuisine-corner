// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cuisine-corner-fb733.firebaseapp.com",
  projectId: "cuisine-corner-fb733",
  storageBucket: "cuisine-corner-fb733.appspot.com",
  messagingSenderId: "935439122510",
  appId: "1:935439122510:web:eb3eeb4f75d7c20c11031f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
