import React from "react";
import "./Product.css";

const Product = ({ singleProduct, AddToCard }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="singleProductCard">
      <p> Id - {id} </p>
      <h2> Name - {name} </h2>
      <h3> Price - {price} </h3>
      <h4> Brand - {brand} </h4>
      <h4> Color - {color} </h4>
      <button onClick={() => AddToCard(singleProduct)} className="AddToCardBtn">
        Add To Card{" "}
      </button>
    </div>
  );
};

export default Product;
