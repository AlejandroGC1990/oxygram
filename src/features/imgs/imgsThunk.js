import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRandomPhotosEndpoint,
  getSearchPhotosEndpoint,
} from "../../app/API/apiConfig";

//Random photos
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async () => {
    try {
      const url = getRandomPhotosEndpoint;
      const response = await fetch(url);
      console.log("Fetching from URL:", url);

      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error("Failed to fetch");
    } catch (error) {
      return null;
    }
  }
);

//Search photos
export const FetchSearchImagesListThunk = createAsyncThunk(
  "searchImgs/fetchSearchImagesList",
  async (query) => {
    try {
      const url = getSearchPhotosEndpoint(query);
      const response = await fetch(url);
      console.log("Fetching photos by query from URL:", url);

      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error("Failed to fetch");
    } catch (error) {
      console.error("Error fetrching photos by query:", error);
      return [];
    }
  }
);
