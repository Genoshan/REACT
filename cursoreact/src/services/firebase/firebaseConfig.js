import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSe49rxXGOGOej1w6-6Fo1ACO6fW8P7V4",
  authDomain: "carrito-react-69428.firebaseapp.com",
  projectId: "carrito-react-69428",
  storageBucket: "carrito-react-69428.appspot.com",
  messagingSenderId: "669711024867",
  appId: "1:669711024867:web:f4fce0fd82328549517bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFireStore(app)