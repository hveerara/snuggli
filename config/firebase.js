import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGE5mDroGJt5YDoM6g9IoBea9AudW-EL8",
  authDomain: "snugglivet.firebaseapp.com",
  projectId: "snugglivet",
  storageBucket: "snugglivet.firebasestorage.app",
  messagingSenderId: "355370673452",
  appId: "1:355370673452:web:71721d9b0dd801cc40f889",
  measurementId: "G-FB5D0RJJR5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
