import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: {},
  modal: {
    visible: false,
    imageId: null,
  },
};

const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComment(state, action) {
      const { imageId, comment } = action.payload;
      state[imageId] = comment;
    },
    loadComments(state, action) {
      return { ...state, ...action.payload };
    },
    removeComment(state, action) {
      const { imageId } = action.payload;
      delete state[imageId];
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

export const {
  setComment,
  loadComments,
  removeComment,
  openModal,
  closeModal,
} = CommentSlice.actions;
export default CommentSlice.reducer;
