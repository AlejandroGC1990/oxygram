import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLatestPhotosEndpoint } from "../../app/api/apiConfig.js";

export const FetchLatestImagesListThunk = createAsyncThunk(
    "newPhotos/fetchLatestPhotoEndPointList",
    async({ page = 1, perPage = 10} = {}) => {
        try{
            const url = getLatestPhotosEndpoint({page, perPage});
            const response = await fetch(url, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error("Failed to fetch latest images");
            }
        } catch (error) {
            console.error("Error fetching latest iamges:", error);
            throw error;
        }
    }
);