import React from "react";
import Product from "./Product";
import "./Products.css";

function Products({ products, addToCart }) {
  if (products.length === 0) {
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
    <div className="products-container">
      {products.map((product) => (
        <Product
          image={product.media.source}
          name={product.name}
          disc={product.description.replace("<p>", "").replace("</p>", "")}
          price={product.price.formatted_with_symbol}
          id={product.id}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Products;
