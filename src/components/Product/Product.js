import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    /* pd=Product */
    <div className="product">
      <div className="">
        <img src={img} />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h4>
        <br />
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stack</small>
        </p>
        {props.showAddToCart && (
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="cart-btn"
          >
            <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
