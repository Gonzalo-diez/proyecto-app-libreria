import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAS9rG7wjZCtADgsxYLVH2OGtOv4b46Nvw",
  authDomain: "ecommerce-gonzalo-diez.firebaseapp.com",
  projectId: "ecommerce-gonzalo-diez",
  storageBucket: "ecommerce-gonzalo-diez.appspot.com",
  messagingSenderId: "106750361578",
  appId: "1:106750361578:web:76aa5c1a2787ed1efebc93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Auth = getAuth(app) 