import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };
  const [cart, setCart] = useState([]);
  const removeProduct = (productkey) => {
    const newCart = cart.filter((pd) => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productkeys = Object.keys(savedCart);
    const cartProducts = productkeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImage} alt="" />;
  }
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewIteam
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}
          ></ReviewIteam>
        ))}
        {thankyou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <button onClick={handlePlaceOrder} className="cart-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Review;
