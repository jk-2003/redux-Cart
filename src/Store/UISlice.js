import { createSlice } from "@reduxjs/toolkit";

const ShowCartSlice = createSlice({
  name: "ui",
  initialState: { showcart: false },
  reducers: {
    toggle: (state) => {
      state.showcart = !state.showcart;
    },
  },
});

export const {toggle} = ShowCartSlice.actions;
export default ShowCartSlice;
