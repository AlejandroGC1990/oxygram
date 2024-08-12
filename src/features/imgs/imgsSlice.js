import { createSlice } from "@reduxjs/toolkit";
import { FetchImagesListThunk, FetchSearchImagesListThunk } from "./imgsThunk";

export const ImagesSlice = createSlice({
  name: "imgs",
  initialState: {
    status: "idle",
    randomPhotos: [],
    searchPhotos: [],
    error: {
      randomPhotos: null,
      searchPhotos: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //Random Photos
    builder
      .addCase(FetchImagesListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(FetchImagesListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        // state.images = action.payload || [];
        state.randomPhotos = action.payload == null ? [] : action.payload;
      })
      .addCase(FetchImagesListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error.randomPhotos = action.error.message; 
      });

    //Search Photos
    builder
      .addCase(FetchSearchImagesListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(FetchSearchImagesListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        // state.images = action.payload || [];
        state.searchPhotos = action.payload == null ? [] : action.payload;
      })
      .addCase(FetchSearchImagesListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error.searchPhotos = action.error.message;
      });
  },
});

export default ImagesSlice.reducer;