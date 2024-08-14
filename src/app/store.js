import { configureStore } from '@reduxjs/toolkit';
import { FavSlice } from '../features/favs/favsSlice';
import { ImagesSlice } from '../features/imgs/imgsSlice';

export const store = configureStore({
    reducer: {
        "favs" : FavSlice.reducer,
        "imgs" : ImagesSlice.reducer
    }
})
