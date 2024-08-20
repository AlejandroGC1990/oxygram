import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRandomPhotosEndpoint,
  getSearchPhotosEndpoint,
} from "../../app/api/apiConfig";
import { keys } from "../../app/api/apiKeys.js";

//Random photos
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async ({page = 1, perPage = 10} = {}) => {
    try {
      const url = getRandomPhotosEndpoint({page, perPage});

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`,
          "Content-Type": "application/json",
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
      throw error(error);
    }
  }
);


//Search photos
export const FetchSearchImagesListThunk = createAsyncThunk(
  "imgs/fetchSearchImagesList",
  async ({ query, page = 1, perPage = 10 }) => {
    try {
      const url = getSearchPhotosEndpoint(query, page, perPage);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.results || [];
      }

      throw new Error(
        `Failed to fetch search results. Status: ${response.status}`
      );
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  }
);

//Download photo
export const downloadImageThunk = createAsyncThunk(
  "img/downloadImage",
  async (imageId, { getState }) => {
    try {
      const state = getState();
      console.log("Current state:", state);
      const randomPhotos = state.imgs.randomPhotos || [];
      const searchPhotos = state.imgs.searchPhotos || [];
      console.log("Random Photos:", randomPhotos);
      console.log("Search Photos:", searchPhotos);
      const photo =
        randomPhotos.find((photo) => photo.id === imageId) ||
        searchPhotos.find((photo) => photo.id === imageId);

      console.log("Photo found:", photo);

      if (!photo) {
        throw new Error("Photo not found");
      }

      //enviar solicitud de seguimiento de descarga
      const downloadTrackingUrl = photo.links.download_location;
      console.log("Download URL:", downloadTrackingUrl);
       await fetch(downloadTrackingUrl, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`,
        },
      });

      //descargar imagen
      const imageUrlDownload = photo.urls.full;
      const response = await fetch(imageUrlDownload, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${keys.VITE_ACCESS_KEY}`,
        }
      });

      console.log("Download response status:", response.status);
      if (response.ok) {
        const blob = await response.blob();
        console.log("Blob size:", blob.size);
        const fileUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = `${imageId}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        throw new Error("Failed to download photo");
      }
    } catch (error) {
      console.error("Error downloading photo:", error);
      throw error;
    }
  }
);
