import { createSlice } from "@reduxjs/toolkit";

const ShowCartSlice = createSlice({
  name: "ui",
  initialState: { showcart: false, notification: null },
  reducers: {
    toggle: (state) => {
      state.showcart = !state.showcart;
    },
    showNotification: (state, action) => {
      console.log(action.payload);
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification, hideNotification } =
  ShowCartSlice.actions;
export default ShowCartSlice;
