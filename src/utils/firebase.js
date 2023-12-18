import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAzvyoRuBmVLMp4waBOeCcGvQoxIXpcUck",
  authDomain: "husteam-56f9a.firebaseapp.com",
  projectId: "husteam-56f9a",
  storageBucket: "husteam-56f9a.appspot.com",
  messagingSenderId: "111243158581",
  appId: "1:111243158581:web:fda1a33ea1a7b66a7efd7c",
  measurementId: "G-4Q08Z8WNZX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
