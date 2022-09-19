import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmJITk2et7UaUTHmSQrcabGJTeLUXTHSY",
  authDomain: "react-26f3c.firebaseapp.com",
  projectId: "react-26f3c",
  storageBucket: "react-26f3c.appspot.com",
  messagingSenderId: "723743945750",
  appId: "1:723743945750:web:1aa3ecae117aee2a8b3137",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();
