import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import { showNotification } from "./UISlice";
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
      let a;
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
      const id = action.payload.id;
      state.totalquantity--;
      const existingitem = state.items.find((item) => item.id == id);
      // console.log(existingitem.quantity, id);
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingitem.id);
      } else {
        existingitem.quantity--;
        existingitem.totalPrice = existingitem.price * existingitem.quantity;
      }
    },
  },
});

export const sendcartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "pending!",
        message: "Sending cart data",
      })
    );

    const sendrequest = async () => {
      const response = await fetch(
        "https://food-app-2ef2f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("something error");
      }
    };

    try {
      await sendrequest();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "technical issue",
        })
      );
    }
  };
};

export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice;
