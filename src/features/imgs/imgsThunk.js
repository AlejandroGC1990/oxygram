import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

      const request = await fetch(`${API_URL}/photos?client_id=${ACCESS_KEY}`);
      console.log("Fetching from URL:", request);
      if (request.ok) {
        const data = await request.json();
        return data.results;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
);
