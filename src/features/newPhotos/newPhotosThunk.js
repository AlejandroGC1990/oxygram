import { createAsyncThunk } from "@reduxjs/toolkit";
import { getlastestPhotosEndpoint } from "../../app/api/apiConfig.js";

export const FetchLatestImagesListThunk = createAsyncThunk(
    "newPhotos/fetchLatestPhotoEndPointList",
    async({ page = 1, perPage = 10} = {}) => {
        try{
            const url = getlastestPhotosEndpoint({page, perPage});
            const response = await fetch(url, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data received from API:", data);
                console.log("Is data array:", Array.isArray(data));
                return Array.isArray(data) ? data : [];
            } else {
                throw new Error("Failed to fetch latest images");
            }
        } catch (error) {
            console.error("Error fetching latest iamges:", error);
            throw error;
        }
    }
);