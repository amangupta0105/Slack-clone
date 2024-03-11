import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVy_vx9X6AeS5QNRdSBi1chlXgN_YU8yA",
  authDomain: "slack-clone-4b92a.firebaseapp.com",
  projectId: "slack-clone-4b92a",
  storageBucket: "slack-clone-4b92a.appspot.com",
  messagingSenderId: "790124598381",
  appId: "1:790124598381:web:fb30c3b0e98cc91c3a1b64",
  measurementId: "G-EG2DZPPKT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();

const db = getFirestore(app);

export {auth,provider,db}
