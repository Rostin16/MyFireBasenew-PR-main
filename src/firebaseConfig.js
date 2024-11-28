
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNrzqHZEaY02C8oaI83rjN4-pz9GfNyo",
  authDomain: "myfirestorage-1af90.firebaseapp.com",
  projectId: "myfirestorage-1af90",
  storageBucket: "myfirestorage-1af90.firebasestorage.app",
  messagingSenderId: "927475187415",
  appId: "1:927475187415:web:cbfe3061ef9001a4c83a92",
  measurementId: "G-F39HW03YX8",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);