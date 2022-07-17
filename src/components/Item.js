import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddCart] = useState("");

  function addCart() {
    setAddCart((addToCart) => (addToCart = !addToCart));
  }

  return (
    // <li className="">
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addToCart ? "add" : "remove"} onClick={addCart}>
        {addToCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
