import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce(
    (previous, product) => previous + Math.ceil(product.price * 85),
    0
  );
  return (
    <section>
      <div className="productValues">
        <p>Number of Products: {cart.length}</p>
        <p>Total Price: {total}.00 BDT</p>
      </div>
    </section>
  );
};

export default Cart;
