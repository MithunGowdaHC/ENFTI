
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-dI6OGaBCapIfHL91eJXdkiQYvR_thqM",
  authDomain: "nftribe-b0c0d.firebaseapp.com",
  projectId: "nftribe-b0c0d",
  storageBucket: "nftribe-b0c0d.appspot.com",
  messagingSenderId: "272320464332",
  appId: "1:272320464332:web:067a0390cc1dce91f98969",
  measurementId: "G-80BM23QDEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
