import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRandomPhotosEndpoint,
  getSearchPhotosEndpoint
} from "../../app/api/apiConfig";

//Random photos
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async () => {
    try {
      const url = getRandomPhotosEndpoint();
      const response = await fetch(url);

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
  "imgs/fetchSearchImagesList",
  async (query) => {
    try {
      const url = getSearchPhotosEndpoint(query);
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        return data.results || [];
      }

      throw new Error("Failed to fetch");
    } catch (error) {
      return [];
    }
  }
);
