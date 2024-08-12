import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRandomPhotosEndpoint,
  getSearchPhotosEndpoint,
} from "../../app/api/apiConfig";
import { keys } from "../../app/api/apiKeys.js";

//Random photos
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async () => {
    try {
      const url = getRandomPhotosEndpoint();
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`, 
          'Content-Type': 'application/json'
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error;
      // return null;
    }
  }
);

//Search photos
export const FetchSearchImagesListThunk = createAsyncThunk(
  "imgs/fetchSearchImagesList",
  async (query) => {
    try {
      const url = getSearchPhotosEndpoint(query);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`,
        },
      });
      console.log('Response:', response)
      
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
        return data.results || [];
      }

      throw new Error(`Failed to fetch search results. Status: ${response.status}`);
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  }
);
