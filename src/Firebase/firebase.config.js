
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKmZ-y-NQ6Zo4qML_w1I6SX31qmkC1OG4",
  authDomain: "dragon-news-auth-62fbe.firebaseapp.com",
  projectId: "dragon-news-auth-62fbe",
  storageBucket: "dragon-news-auth-62fbe.firebasestorage.app",
  messagingSenderId: "1095994722711",
  appId: "1:1095994722711:web:ec87e9ccbffbd1c3109cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app