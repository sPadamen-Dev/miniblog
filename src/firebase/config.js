// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT_AesQ3IC48Bv5SzK9jXtnaQCeOIkEdo",
  authDomain: "miniblog-2cfae.firebaseapp.com",
  projectId: "miniblog-2cfae",
  storageBucket: "miniblog-2cfae.firebasestorage.app",
  messagingSenderId: "786560231454",
  appId: "1:786560231454:web:e14bd6afb95622f4f4a60f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db};