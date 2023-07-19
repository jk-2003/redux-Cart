import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Store/UISlice";

const CartButton = (props) => {
  const totalquantity = useSelector((state) => state.cart.totalquantity);

  const usedispatch = useDispatch();

  function togglecartHandler() {
    usedispatch(toggle());
  }

  return (
    <button className={classes.button} onClick={togglecartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;
