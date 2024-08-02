import { configureStore } from '@reduxjs/toolkit';
import { FavsSlice } from '../features/favs/favsSlice';

export const store = configureStore({
    reducer: {
        "favs" : FavsSlice.reducer,
        // "imgs"
    }
})
