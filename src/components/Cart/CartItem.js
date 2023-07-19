import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
// import { cartActions } from '../../store/cart-slice';
import { removefromcart, addtocart } from "../../Store/CartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, cartItem } = props.item;
  // console.log(props.title);

  const removeItemHandler = () => {
    dispatch(removefromcart(id));
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

  cartItem.map(item=>{
    console.log(item.name)
    
  
  return (

    <li className={classes.item}>
      <header>
        <h3>{item.name}</h3>
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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  )})
};

export default CartItem;
