import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

// Obtener todos los documentos
export const fetchData = createAsyncThunk("firestore/fetchData", async () => {
    const snapshot = await getDocs(collection(db, "items"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

// Agregar un nuevo documento
export const addItem = createAsyncThunk("firestore/addItem", async (data) => {
    const ref = await addDoc(collection(db, "items"), data);
    return { id: ref.id, ...data };
});

// Actualizar documento existente
export const updateItem = createAsyncThunk("firestore/updateItem", async ({ id, newData }) => {
    const ref = doc(db, "items", id);
    await updateDoc(ref, newData);
    return { id, newData };
});

// Eliminar documento
export const deleteItem = createAsyncThunk("firestore/deleteItem", async (id) => {
    const ref = doc(db, "items", id);
    await deleteDoc(ref);
    return id;
});
