// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDicOtFyPyhen2b4v-sEXkUeBbU17ZLSvQ",
  authDomain: "government-school-website.firebaseapp.com",
  databaseURL: "https://government-school-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "government-school-website",
  storageBucket: "government-school-website.appspot.com",
  messagingSenderId: "539433911498",
  appId: "1:539433911498:web:bc03e5bfa03e583c4e6033",
  measurementId: "G-LFRXN77E6N"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, onValue };