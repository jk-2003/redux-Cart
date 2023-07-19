import React from "react";
import "./CartItem.module.css";
function AddCart(props) {
  function removeItemHandler() {}
  function addItemHandler() {}
console.log(props.title)
  return (
    <div>
      <li className={"item"}>
        <header>
          <h3>{props.title}</h3>
          <div className={"price"}>
            ${props.total.toFixed(2)}{" "}
            <span className={"itemprice"}>(${props.price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={"details"}>
          <div className={"quantity"}>
            x <span>{props.quantity}</span>
          </div>
          <div className={"actions"}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default AddCart;
