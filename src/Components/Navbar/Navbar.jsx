import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ totalItem }) {
  return (
    <nav className="navbar-container">
      <img
        className="logo"
        src="https://image.freepik.com/free-vector/gorilla-head-monochrome-style_225004-458.jpg"
        alt="monke"
      />
      <div className="main-head">
        <h1>MONKE STORE</h1>
      </div>
      <Link to="/cart">
        <IconButton>
          <Badge badgeContent={totalItem} color="secondary" className="badge">
            <ShoppingCartIcon className="cart-icon" />
          </Badge>
        </IconButton>
      </Link>
    </nav>
  );
}

export default Navbar;
