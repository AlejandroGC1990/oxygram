import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "../features/favs/favsSlice";
import imgsReducer from "../features/random/randomSlice";
import newPhotosReducer from "./features/newPhotos/newPhotosSlice";
import commentsReducer from "../features/comment/commentSlice";
import contactReducer from "../features/modals/modalSlice"; 

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    imgs: imgsReducer,
    newPhotos: newPhotosReducer,
    comments: commentsReducer,
    contact: contactReducer,
  },
});
