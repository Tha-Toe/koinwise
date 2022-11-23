// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsurADDse0NTj81Rx8ocJp-TjHyLkyxRk",
  authDomain: "koinwise-bd513.firebaseapp.com",
  projectId: "koinwise-bd513",
  storageBucket: "koinwise-bd513.appspot.com",
  messagingSenderId: "934908494428",
  appId: "1:934908494428:web:a3a2e4360dbcf68d3c1c99",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
// Initialize Firebase
export { storage, db };
