import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart({ cart, update, del, empty }) {
  if (!cart.line_items) {
    return (
      <div className="loading-container">
        <img
          src="https://i.pinimg.com/originals/84/ef/44/84ef447b1462d8ed463d868d017ea365.gif"
          alt="loading"
        />
      </div>
    );
  }
  return (
    <div className="cart-container">
      <div className="cart-head">
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="cart-item-container">
        {cart.line_items.map((item) => (
          <CartItem item={item} update={update} del={del} />
        ))}
      </div>
      <div className="cart-buttons">
        <button
          className="empty-btn"
          onClick={() => {
            empty();
          }}
        >
          Empty Cart
        </button>
        <Link to="/" className="link">
          <button className="cont-btn">Continue Shopping</button>
        </Link>
        <Link to="/checkout" className="link">
          <button className="out-btn">Check Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
