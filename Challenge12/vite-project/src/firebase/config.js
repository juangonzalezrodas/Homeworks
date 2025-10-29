// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxn-rJ89czm52r1sicreeYaLftTIjKspw",
    authDomain: "challenge12-5e413.firebaseapp.com",
    projectId: "challenge12-5e413",
    storageBucket: "challenge12-5e413.firebasestorage.app",
    messagingSenderId: "315077456269",
    appId: "1:315077456269:web:6f0c1b70a498c4688a4dc4",
    measurementId: "G-5XBE314SWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebasestorage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth()

export { app, auth, firebasestorage, db }