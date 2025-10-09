import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import stackReducer from './stackSlice';

const store = configureStore({
    reducer: {
    counter: counterReducer,
    stack: stackReducer
    }
});

export default store;