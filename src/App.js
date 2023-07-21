import React, { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendcartdata } from "./Store/CartSlice";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showcart = useSelector((state) => state.ui.showcart);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  console.log(notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendcartdata(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
