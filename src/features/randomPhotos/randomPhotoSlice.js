import { createSlice } from "@reduxjs/toolkit";
import { downloadImageThunk, FetchImagesListThunk, FetchSearchImagesListThunk } from "./randomPhotoThunk";

export const RandomPhotoSlice = createSlice({
  name: "imgs",
  initialState: {
    status: "idle",
    randomPhotos: [],
    searchPhotos: [],
    searchQuery: "",
    page: 1,
    error: {
      randomPhotos: null,
      searchPhotos: null,
    },
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.page = 1;
      state.searchPhotos = [];
    },
    resetPage: (state) => {
      state.page = 1;
    },
    resetSearchResults: (state) => {
      state.searchPhotos = [];
      state.searchQuery = "";
    }
  },
  extraReducers: (builder) => {
    //Random Photos
    builder
      .addCase(FetchImagesListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(FetchImagesListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.randomPhotos = state.randomPhotos.concat(action.payload);
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
        state.searchPhotos = state.searchPhotos.concat(action.payload);
        
      })
      .addCase(FetchSearchImagesListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error.searchPhotos = action.error.message;
      });

    //Download Photos
    builder
      .addCase(downloadImageThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(downloadImageThunk.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(downloadImageThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error.download = action.payload || action.error.message;
      })
    },
});

export const { incrementPage, setSearchQuery, resetPage } = RandomPhotoSlice.actions;
export default RandomPhotoSlice.reducer;