import { configureStore } from "@reduxjs/toolkit";
import favsReducer  from "../features/favs/favsSlice";
import imgsReducer from "../features/imgs/imgsSlice";
import commentsReducer from "../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    imgs: imgsReducer,
    comments: commentsReducer,
  },
});
