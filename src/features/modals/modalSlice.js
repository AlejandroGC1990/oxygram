import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const contactModalSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openContactModal(state) {
      state.isModalOpen = true;
    },
    closeContactModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const {
  openContactModal,
  closeContactModal
} = contactModalSlice.actions;

export default contactModalSlice.reducer;
