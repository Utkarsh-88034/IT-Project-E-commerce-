import React from "react";
import "./CartItem.css";

function CartItem({ item, update, del }) {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={item.media.source} alt="" />
      </div>
      <div className="item-details">
        <div className="item-head">
          <h2>{item.name}</h2>
          <h3>{item.price.formatted_with_symbol}</h3>
        </div>
      </div>
      <div className="item-functions">
        <div className="item-count">
          <button
            className="count-btn"
            onClick={() => {
              update(item.id, item.quantity - 1);
            }}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            className="count-btn"
            onClick={() => {
              update(item.id, item.quantity + 1);
            }}
          >
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => {
            del(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
