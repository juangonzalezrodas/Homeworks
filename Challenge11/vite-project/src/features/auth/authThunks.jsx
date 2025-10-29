import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const loginWithEmail = createAsyncThunk(
    "auth/loginWithEmail",
    async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
    }
);

export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    await signOut(auth);
});
