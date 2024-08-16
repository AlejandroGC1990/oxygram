import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const CommentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComment(state, action) {
            const {imageId, comment} = action.payload;
            state[imageId] = comment;
        },
        loadComments(state, action) {
            return { ...state, ...action.payload };
        },
        removeComment(state, action) {
            const {imageId} = action.payload;
            delete state[imageId];
        },
    },
});

export const {setComment, loadComments, removeComment} = CommentSlice.actions;
export default CommentSlice.reducer;