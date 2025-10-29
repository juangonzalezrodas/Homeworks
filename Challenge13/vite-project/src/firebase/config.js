// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwB8inegXGjX2BUD5FZZoA1PS8pML99aY",
    authDomain: "challenge13-51b67.firebaseapp.com",
    databaseURL: "https://challenge13-51b67-default-rtdb.firebaseio.com",
    projectId: "challenge13-51b67",
    storageBucket: "challenge13-51b67.firebasestorage.app",
    messagingSenderId: "602914564113",
    appId: "1:602914564113:web:0a6ab1686264f40a1ca9b0",
    measurementId: "G-FE4MF8M6C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)

export { db }