// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUi3vIS7fyJ3P2X_VLPSAoa7cgKs2M_FI",
  authDomain: "ig-clone-a01ad.firebaseapp.com",
  projectId: "ig-clone-a01ad",
  storageBucket: "ig-clone-a01ad.appspot.com",
  messagingSenderId: "1028188179534",
  appId: "1:1028188179534:web:c77380a1558d3f290f071f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };