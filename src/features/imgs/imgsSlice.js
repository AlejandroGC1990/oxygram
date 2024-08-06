import { createSlice } from "@reduxjs/toolkit";
import { FetchImagesListThunk, FetchSearchImagesListThunk } from "./imgsThunk";

const fulfilled = (state, action) => {
  state.status = "fulfilled";
  state.images = action.payload == null ? [] : action.payload;
};

const rejected = (state, action) => {
  state.status = "rejected";
  state.error = action.error.message;
};

export const ImagesSlice = createSlice({
  name: "imgs",
  initialState: {
    status: {
      randomPhotos: "idle",
      searchPhotos: "idle",
    },
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
        fulfilled(state, action);
      })
      .addCase(FetchImagesListThunk.rejected, (state, action) => {
        state.status = "rejected";
        rejected(state, action);
      });

    //Search Photos
    builder
      .addCase(FetchSearchImagesListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(FetchSearchImagesListThunk.fulfilled, (state, action) => {
        fulfilled(state, action);
      })
      .addCase(FetchSearchImagesListThunk.rejected, (state, action) => {
        rejected(state, action);
      });
  },
});

export default ImagesSlice.reducer;