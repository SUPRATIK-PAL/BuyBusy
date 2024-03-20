// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZnRm6HDJuKITptIJ88Jj4_x4gudnRaGg",
  authDomain: "buybusy-269a8.firebaseapp.com",
  projectId: "buybusy-269a8",
  storageBucket: "buybusy-269a8.appspot.com",
  messagingSenderId: "762227878702",
  appId: "1:762227878702:web:0ea46a57abcce321c7a8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
