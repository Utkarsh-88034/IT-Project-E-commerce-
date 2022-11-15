import React from "react";
import OrderItem from "./OrderItem";
import "./OrderItem.css";

function OrderDetails({ token }) {
  return (
    <div className="order-details-container">
      {token.live.line_items.map((product) => (
        <OrderItem product={product} />
      ))}
      <h4 style={{ padding: "10px", fontFamily: "PT Sans" }}>
        Sub Total : {token.live.subtotal.formatted_with_symbol}
      </h4>
    </div>
  );
}

export default OrderDetails;
