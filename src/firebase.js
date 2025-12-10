import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyeVa4A7Ts1JjYd0U1rpJgCxrQBbdUDuc",
  authDomain: "my-react-lab-8.firebaseapp.com",
  projectId: "my-react-lab-8",
  storageBucket: "my-react-lab-8.firebasestorage.app",
  messagingSenderId: "199709625792",
  appId: "1:199709625792:web:65bb5c9330f396b1e20c25"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація бази даних Firestore
export const db = getFirestore(app);