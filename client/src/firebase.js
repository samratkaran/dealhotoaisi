// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Paste your Firebase config here
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dealhotoaisi-ebase.firebaseapp.com",
  projectId: "dealhotoaisi-ebase",
  storageBucket: "dealhotoaisi-ebase.firebasestorage.app",
  messagingSenderId: "731144280087",
  appId: "1:731144280087:web:984069e01c372e6aefa452",
  measurementId: "G-WJTC3BLWQZ"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const analytics = getAnalytics(app);



