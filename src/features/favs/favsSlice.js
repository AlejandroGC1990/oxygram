import { createSlice } from "@reduxjs/toolkit";

export const FavSlice = createSlice({
  name: "favs",
  initialState: [],
  reducers: {
    // addFavs: (action, payload) => {
    //   state.favs.push(action.payload);
    // },
    // removeFavorite: (state, action) => {
    //   state.favs.push(action.payload);
    // },
  },
});

export const { addFav } = FavSlice.actions;
