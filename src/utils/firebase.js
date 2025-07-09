// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuwMsduyArcn8CtQ3y6iwyXtW_1pCjQdw",
  authDomain: "react-ui-snippets-39cba.firebaseapp.com",
  projectId: "react-ui-snippets-39cba",
  storageBucket: "react-ui-snippets-39cba.firebasestorage.app",
  messagingSenderId: "894993102077",
  appId: "1:894993102077:web:9eeec5e50e6f063b043a94",
  measurementId: "G-80X7RQ11JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);