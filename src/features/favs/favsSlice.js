import { createSlice } from "@reduxjs/toolkit";

const getFavPhotoLocalStorage = () => {
  const savedFav = localStorage.getItem("favorites");
  return savedFav ? JSON.parse(savedFav) : [];
};

export const FavSlice = createSlice({
  name: "favs",
  initialState: {
    favs: getFavPhotoLocalStorage(),
  },
  reducers: {
    addFav: (state, action) => {
      const newFav = action.payload;

      //para la prevención de duplicados
      if (!state.favs.find((fav) => fav.id === newFav.id)) {
        state.favs.push(newFav);
        localStorage.setItem("favorites", JSON.stringify(state.favs));
      }
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.favs));
    },
  },
});

export const { addFav, removeFav } = FavSlice.actions;
export default FavSlice.reducer;
