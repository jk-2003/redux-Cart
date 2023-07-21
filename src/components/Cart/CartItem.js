import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
// import { cartActions } from '../../store/cart-slice';
import { removefromcart, addtocart } from "../../Store/CartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;
  // console.log(id);

  const removeItemHandler = () => {
    dispatch(removefromcart({ id }));
  };

  const addItemHandler = () => {
    dispatch(
      addtocart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
