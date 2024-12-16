import { createSlice } from "@reduxjs/toolkit";
import { FetchLatestImagesListThunk } from "./newPhotosThunk";

const newPhotosSlice = createSlice({
    name: "newPhotos",
    initialState: {
        status: "idle",
        lastestPhotos: [],
        page: 1,
        error: null,
    },
    reducers: {
        resetLatestPhotos: (state) => {
            state.lastestPhotos = [];
            state.page = 1;
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchLatestImagesListThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(FetchLatestImagesListThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.lastestPhotos = action.payload;
            })
            .addCase(FetchLatestImagesListThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    },
});

export const [resetLatestPhotos] = newPhotosSlice.actions;
export default newPhotosSlice.reducer;