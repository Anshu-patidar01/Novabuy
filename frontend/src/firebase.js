// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUoVISA6eZVi2pDUZrQNQHIXQ8GiBjY-4",
  authDomain: "fir-2d6b5.firebaseapp.com",
  projectId: "fir-2d6b5",
  storageBucket: "fir-2d6b5.firebasestorage.app",
  messagingSenderId: "152673438867",
  appId: "1:152673438867:web:e144eb599c9884d429d166",
  measurementId: "G-9PG30EYGHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
