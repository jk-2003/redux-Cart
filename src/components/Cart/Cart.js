import Card from "../UI/Card";
import AddCart from "./AddCart";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);
  // console.log(cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{
            title: "Test Item",
            quantity: 3,
            total: 18,
            price: 6,
            cartItem,
          }}
        /> */}

        {cartItem?.map((item) => {

         return <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />;
          console.log(item);
        })}

      </ul>
    </Card>
  );
};

export default Cart;
