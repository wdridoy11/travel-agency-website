// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_60sH6vNnyieQpJgtdGPW2XtirG-F8nw",
  authDomain: "travel-website-design-78d8a.firebaseapp.com",
  projectId: "travel-website-design-78d8a",
  storageBucket: "travel-website-design-78d8a.appspot.com",
  messagingSenderId: "7871810576",
  appId: "1:7871810576:web:d12c123dea43e88f4fce95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app