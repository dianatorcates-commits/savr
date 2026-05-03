import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYYH8sI4kCqXF2qUY5oKHQI0uC6Aku8HQ",
  authDomain: "savr-f5076.firebaseapp.com",
  projectId: "savr-f5076", 
  storageBucket: "savr-f5076.appspot.com",
  messagingSenderId: "703407936312",
  appId: "1:703407936312:web:8c4f97e3ab4b1234567890"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);