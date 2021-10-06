import React from "react";


const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  }
  if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }
  const tax = totalPrice / 10;
  const allPrice = (totalPrice + shipping + Number(tax)).toFixed(2);
  const formateNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formateNumber(totalPrice)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax + Vat: {formateNumber(tax)}</small>
      </p>
      <p>Total Price: {allPrice}</p>
    {
      props.children
    }
    </div>
  );
};

export default Cart;
