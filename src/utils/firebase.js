// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Q258mZBL5z6ftrQZKqK2h5oJBuPeE50",
  authDomain: "netflixgpt-9e621.firebaseapp.com",
  projectId: "netflixgpt-9e621",
  storageBucket: "netflixgpt-9e621.appspot.com",
  messagingSenderId: "613711261374",
  appId: "1:613711261374:web:6d20f26fe1ead0fd09b8ef",
  measurementId: "G-HQ41V7K14Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//creating & exporting auth as it will be required in every api.
export const auth = getAuth();
