import { createSlice } from "@reduxjs/toolkit";

const ImageSlice = createSlice({
    name : "imgs",
    initialState : {
        images : [],
    },
    reducers : {
        // addImg : (state, action) => {

        // }
    }

})


export const { getImg } = ImageSlice.actions;