import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/CartSlice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  // console.log(title, price, description, id);
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    // console.log('clicked')
    dispatch(
      addtocart({
        title,
        price,
        id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
