import { createSlice } from "@reduxjs/toolkit";
import { downloadImageThunk, FetchImagesListThunk, FetchSearchImagesListThunk } from "./imgsThunk";

export const ImagesSlice = createSlice({
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
        state.randomPhotos = [...action.payload];
        // state.randomPhotos = [...state.randomPhotos, ...action.payload];
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
        state.searchPhotos = action.payload == null ? [] : action.payload;
        
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

export const { incrementPage, setSearchQuery, resetPage } = ImagesSlice.actions;
export default ImagesSlice.reducer;