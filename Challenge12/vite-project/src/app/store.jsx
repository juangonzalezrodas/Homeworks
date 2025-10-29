import { configureStore } from "@reduxjs/toolkit";
import firestoreReducer from "../features/firestore/firestoreSlice";

export const store = configureStore({
    reducer: {
    firestore: firestoreReducer,
    },
});
