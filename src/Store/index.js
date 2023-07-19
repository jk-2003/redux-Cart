import { configureStore } from "@reduxjs/toolkit";
import showcart from "./UISlice";
import cartslice from "./CartSlice";
const store = configureStore({
  reducer: {
    ui: showcart.reducer,
    cart: cartslice.reducer,
  },
});
export default store;
