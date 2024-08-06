import { createSlice } from "@reduxjs/toolkit";
import { FetchImagesListThunk } from "./imgsThunk";

export const ImagesSlice = createSlice({
    name : "imgs",
    initialState : {
        status :"idle",
        data : [],
        error: null
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchImagesListThunk.pending, (state) => {
                state.status = "pending";
            })       
            .addCase(FetchImagesListThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
            })
            .addCase(FetchImagesListThunk.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error;
            });
    }
});

