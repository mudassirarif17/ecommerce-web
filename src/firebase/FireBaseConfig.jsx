// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLi1xRNfVGbO65saD-Lm7rS_AD3KgmeU",
  authDomain: "ecommerce-web-8727e.firebaseapp.com",
  projectId: "ecommerce-web-8727e",
  storageBucket: "ecommerce-web-8727e.appspot.com",
  messagingSenderId: "703711276422",
  appId: "1:703711276422:web:eb90eccc7327e5312dd007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFireStore(app);
const auth = getAuth(app);

export {fireDb , auth};