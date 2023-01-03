import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfAZYLSEA_jlp7pWibz1-xKGFPyxXBT40",
  authDomain: "blog-49fe6.firebaseapp.com",
  projectId: "blog-49fe6",
  storageBucket: "blog-49fe6.appspot.com",
  messagingSenderId: "322409102276",
  appId: "1:322409102276:web:8c1626a31e7cbd74f94291",
  measurementId: "G-DTR7GWB7C9"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};
