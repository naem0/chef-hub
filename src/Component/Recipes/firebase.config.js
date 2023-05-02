// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFIUV7VddclZobKqH_NBHiAcKv5lQbOvY",
  authDomain: "chef-recipe-hunter-ddc68.firebaseapp.com",
  projectId: "chef-recipe-hunter-ddc68",
  storageBucket: "chef-recipe-hunter-ddc68.appspot.com",
  messagingSenderId: "312804950060",
  appId: "1:312804950060:web:8f4811607b66865a445189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;