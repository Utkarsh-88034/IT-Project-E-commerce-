import React from "react";
import { Link } from "react-router-dom";

function Confirmation({ order }) {
  return (
    <>
      {order.customer ? (
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              fontFamily: "PT Sans",
              color: "rgb(75,75,75",
              margin: "10px 0",
            }}
          >
            Your order has been completed successfully. Thank You for Shopping
            with US :)
          </h4>
          <Link to="/" className="link">
            <button
              style={{ height: "40px", width: "120px", margin: "10px 0" }}
            >
              Home Page
            </button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/84/ef/44/84ef447b1462d8ed463d868d017ea365.gif"
            alt="LOading...."
          />
        </div>
      )}
    </>
  );
}

export default Confirmation;
