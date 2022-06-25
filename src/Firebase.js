// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq6kDdKpgahbSCIEPGYZqKNe2ygKKhP6k",
  authDomain: "my-firebase-app-4f920.firebaseapp.com",
  projectId: "my-firebase-app-4f920",
  storageBucket: "my-firebase-app-4f920.appspot.com",
  messagingSenderId: "322083151512",
  appId: "1:322083151512:web:987e8fad18889c9c91faed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);