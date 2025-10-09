import { createSlice } from '@reduxjs/toolkit'

const stackSlice = createSlice({
    name: 'stack',
    initialState: {
    items: []
    },
    reducers: {
    push: (state, action) => {
        state.items.unshift(action.payload)
    },
    pop: (state) => {
        if (state.items.length > 0) {
        state.items.shift()
        }
    },
    clear: (state) => {
        state.items = []
    }
    }
});

export const { push, pop, clear } = stackSlice.actions
export default stackSlice.reducer