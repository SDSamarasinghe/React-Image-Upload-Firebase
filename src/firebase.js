// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMLO1eOH5ZcL5s5rtaBpXTloajj8UB2Vs",
  authDomain: "uploadingfile-b36d2.firebaseapp.com",
  projectId: "uploadingfile-b36d2",
  storageBucket: "uploadingfile-b36d2.appspot.com",
  messagingSenderId: "1073539382459",
  appId: "1:1073539382459:web:994debd4e9110f2b69fd9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)