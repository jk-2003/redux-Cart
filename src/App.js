import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const showcart = useSelector((state) => state.ui.showcart);
  return (
    <Layout>
      {showcart && <Cart />}
      {/* <Cart/> */}
      <Products />
    </Layout>
  );
}

export default App;
