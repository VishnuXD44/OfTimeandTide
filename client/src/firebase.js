import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBteBon3dyaBncmv96hVoXZByoI-alw8U8",
  authDomain: "oftimeandtide-ab167.firebaseapp.com",
  projectId: "oftimeandtide-ab167",
  storageBucket: "oftimeandtide-ab167.firebasestorage.app",
  messagingSenderId: "100624168013",
  appId: "1:100624168013:web:a7205862745452cd355804",
  measurementId: "G-Z6VPBYF0HL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
