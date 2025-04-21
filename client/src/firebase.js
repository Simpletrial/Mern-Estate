// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f9b14.firebaseapp.com",
  projectId: "mern-estate-f9b14",
  storageBucket: "mern-estate-f9b14.firebasestorage.app",
  messagingSenderId: "400120519628",
  appId: "1:400120519628:web:549e7510c0760fd0b3db69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);