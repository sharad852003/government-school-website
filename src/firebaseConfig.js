// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDicOtFyPyhen2b4v-sEXkUeBbU17ZLSvQ",
  authDomain: "government-school-website.firebaseapp.com",
  projectId: "government-school-website",
  storageBucket: "government-school-website.appspot.com",
  messagingSenderId: "539433911498",
  appId: "1:539433911498:web:bc03e5bfa03e583c4e6033",
  measurementId: "G-LFRXN77E6N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
