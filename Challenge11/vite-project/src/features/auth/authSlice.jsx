import { createSlice } from '@reduxjs/toolkit'
import { loginWithEmail, loginWithGoogle, logoutUser } from './authThunks'
import { useReducer } from 'react'

const initialState = {
    user: null,
    status: 'idle',
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginWithEmail.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(loginWithEmail.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.user = action.payload
        })
        .addCase(loginWithEmail.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(loginWithGoogle.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.user = action.payload

        })

        .addCase(logoutUser.fulfilled, (state) => {
            state.status = 'idle'
            state.user = null
        })
    },
})

export default authSlice.reducer