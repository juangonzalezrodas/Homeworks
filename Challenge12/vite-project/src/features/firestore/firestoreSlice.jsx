import { createSlice } from "@reduxjs/toolkit";
import { fetchData, addItem, updateItem, deleteItem } from "./firestoreThunks";

const initialState = {
    items: [],
    status: "idle",
};

const firestoreSlice = createSlice({
    name: "firestore",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        })
        .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
        })
        .addCase(updateItem.fulfilled, (state, action) => {
        const { id, newData } = action.payload;
        const index = state.items.findIndex(item => item.id === id);
        if (index !== -1) state.items[index] = { id, ...newData };
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        });
    },
});

export default firestoreSlice.reducer;
