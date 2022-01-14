import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + Math.ceil(product.price * 85) * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  return (
    <section>
      <div className="productValues">
        <p>Number of Products: {totalQuantity}</p>
        <p>Total Price: {total}.00 BDT</p>
      </div>
      <div className="cartProducts">
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
