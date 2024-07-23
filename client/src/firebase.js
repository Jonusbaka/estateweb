// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-babcf.firebaseapp.com",
  projectId: "real-estate-app-babcf",
  storageBucket: "real-estate-app-babcf.appspot.com",
  messagingSenderId: "979502963844",
  appId: "1:979502963844:web:835a57e62f0fc4a22f76d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);