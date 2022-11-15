import React from "react";
import "./OrderItem.css";

function OrderItem({ product }) {
  return (
    <div className="orderitem-container">
      <h2>{product.name}</h2>
      <div className="quant-price">
        <p>Quantity: {product.quantity}</p>
        <p>{product.line_total.formatted_with_symbol}</p>
      </div>
    </div>
  );
}

export default OrderItem;
