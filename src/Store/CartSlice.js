import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalquantity: 0,
  },
  reducers: {
    addtocart: (state, action) => {
      const newitem = action.payload;
      // console.log(newitem);
      const existingitem = state.items.find((item) => item.id === newitem.id);
      state.totalquantity++;
      let a ;
      if (!existingitem) {
        a = {
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          title: newitem.title,
        };
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalPrice = existingitem.price * existingitem.quantity;
      }
      // console.log(state.totalamount, state.items, a);
    },
    removefromcart: (state, action) => {
      const id = action.id;
      const existingitem = state.items.filter((item) => item.id === id);
      state.totalquantity--;
      if (existingitem.quantity === 1) {
        state.items.filter((item) => item.id !== existingitem.id);
      } else {
        existingitem.quantity--;
      }
    },
  },
});

export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice;
