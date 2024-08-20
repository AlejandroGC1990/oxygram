import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "../features/favs/favsSlice";
import imgsReducer from "../features/imgs/imgsSlice";
import commentsReducer from "../features/comment/commentSlice";
import contactReducer from "../features/modals/modalSlice"; 

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    imgs: imgsReducer,
    comments: commentsReducer,
    contact: contactReducer,
  },
});
