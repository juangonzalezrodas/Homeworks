
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBOekN-gJIVp-Bp5FLT2KQb0tPN2DBIwFo",
    authDomain: "login-80c82.firebaseapp.com",
    projectId: "login-80c82",
    storageBucket: "login-80c82.firebasestorage.app",
    messagingSenderId: "14778478915",
    appId: "1:14778478915:web:ce8f2c71fe7720303bbff6",
    measurementId: "G-2P2M57X4SN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()