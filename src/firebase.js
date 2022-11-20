import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-c1fa1.firebaseapp.com",
  projectId: "chat-app-c1fa1",
  storageBucket: "chat-app-c1fa1.appspot.com",
  messagingSenderId: "389692177841",
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
