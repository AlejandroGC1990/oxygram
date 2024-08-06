import { configureStore } from '@reduxjs/toolkit';
// import { FavsSlice } from '../features/favs/favsSlice';
import { ImagesSlice } from '../features/imgs/imgsSlice';

export const store = configureStore({
    reducer: {
        // "favs" : FavsSlice.reducer,
        "imgs" : ImagesSlice.reducer
    }
})
