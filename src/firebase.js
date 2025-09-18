import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEUCQpB9YBh4FU-MsFXfO4BDZI6pWVjQ",
  authDomain: "kwickbuy-e-commerce.firebaseapp.com",
  projectId: "kwickbuy-e-commerce",
  storageBucket: "kwickbuy-e-commerce.firebasestorage.app",
  messagingSenderId: "679257515328",
  appId: "1:679257515328:web:b1f2f4534fb99981d106a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
