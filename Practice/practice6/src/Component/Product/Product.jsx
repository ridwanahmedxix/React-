import React from "react";
import "./Product.css";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="singleCard_Design">
      <h3> Id - {id} </h3>
      <h2> Name - {name} </h2>
      <h4> Price - {price} </h4>
      <h4> Color - {color} </h4>
      <button className="AddToCard_Btn_Design">Add To Card</button>
    </div>
  );
};

export default Product;
