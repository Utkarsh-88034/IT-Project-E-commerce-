import React from "react";
import "./Product.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Product({ name, disc, price, image, id, addToCart }) {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <div className="product-head">
          <h2>{name}</h2>
          <p>{disc}</p>
        </div>
        <div className="product-price">
          <p>{price}</p>
          <div
            className="add-to-cart"
            onClick={() => {
              addToCart(id, 1);
            }}
          >
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
