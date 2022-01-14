import React from "react";
import "../ProductCard/ProductCard.css";

const CartProduct = ({ product }) => {
  return (
    <section className="card">
      <div className="productCatagoryRegular">
        {" "}
        <a href="/">
          <p>{product.category}</p>
        </a>
      </div>
      <div className="cardImage" style={{ height: "200px" }}>
        <img src={product.image} alt="" />
      </div>
      <div className="cardText">
        <p className="cardTitle">{product.title}</p>
        <p className="cardPrice">
          ৳ <span>{Math.ceil(product.price * 85)}</span>
        </p>
        <p className="cardPrice" style={{ color: "#006a4e", fontSize: "16px" }}>
          Quantity: {product.quantity} <br />
          Total Price: {product.quantity * Math.ceil(product.price * 85)}
        </p>
        <p
          className="cardPrice"
          style={{ color: "#006a4e", fontSize: "16px" }}
        ></p>
      </div>
    </section>
  );
};

export default CartProduct;
