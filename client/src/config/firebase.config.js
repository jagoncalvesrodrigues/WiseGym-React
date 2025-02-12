// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdZGC_fgvwfc2Xvg9xmkGRGZBaC9-jSoc",
  authDomain: "wisegym-5bb98.firebaseapp.com",
  projectId: "wisegym-5bb98",
  storageBucket: "wisegym-5bb98.firebasestorage.app",
  messagingSenderId: "293846164072",
  appId: "1:293846164072:web:b0c069f939361b7f8e51dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);