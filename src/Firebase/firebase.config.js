// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDL41tFHf0duVL3Ko63L9ZcmUEhfKKVmxg",
  authDomain: "event-management-15dbe.firebaseapp.com",
  projectId: "event-management-15dbe",
  storageBucket: "event-management-15dbe.appspot.com",
  messagingSenderId: "791761682408",
  appId: "1:791761682408:web:5c32b350e54d1272252e5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
