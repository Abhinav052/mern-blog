// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-2024.firebaseapp.com",
  projectId: "blog-mern-2024",
  storageBucket: "blog-mern-2024.appspot.com",
  messagingSenderId: "161757315236",
  appId: "1:161757315236:web:b803ac8f7ca8441e66a631",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
