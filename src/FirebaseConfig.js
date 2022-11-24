 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVuvnjkkSyo0Uk1ROU2oiDkaSskqS5EUo",
  authDomain: "geniobits-9baa8.firebaseapp.com",
  projectId: "geniobits-9baa8",
  storageBucket: "geniobits-9baa8.appspot.com",
  messagingSenderId: "805443898548",
  appId: "1:805443898548:web:22bf8666754a0e59719be1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);