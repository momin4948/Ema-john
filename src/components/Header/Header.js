import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;