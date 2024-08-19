import { createSlice } from "@reduxjs/toolkit";

const loadCommentsFromLocalStorage = () => {
  const comments = localStorage.getItem("comments");
  return comments ? JSON.parse(comments) : {};
};

const saveCommentsToLocalStorage = (comments) => {
  localStorage.setItem("comments", JSON.stringify(comments));
};

const initialState = {
  comments: loadCommentsFromLocalStorage(),
  modal: {
    visible: false,
    imageId: null,
  },
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComment(state, action) {
      const { imageId, comment } = action.payload;
      state.comments[imageId] = comment;
      saveCommentsToLocalStorage(state.comments);
    },
    removeComment(state, action) {
      const { imageId } = action.payload;
      delete state.comments[imageId];
      saveCommentsToLocalStorage(state.comments);
    },
    openModal(state, action) {
      state.modal = {
        visible: true,
        imageId: action.payload,
      };
    },
    closeModal(state) {
      state.modal = {
        visible: false,
        imageId: null,
      };
    },
  },
});

export const { setComment, removeComment, openModal, closeModal } =
  commentSlice.actions;

export default commentSlice.reducer;
