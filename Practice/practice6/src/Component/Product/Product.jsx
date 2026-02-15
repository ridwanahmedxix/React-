import React from "react";
import "./Product.css";

const Product = ({ singleData, AddToCard }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="singleCard_Design">
      <h3> Id - {id} </h3>
      <h2> Name - {name} </h2>
      <h4> Price - {price} </h4>
      <h4> Color - {color} </h4>
      <button onClick={() => AddToCard(singleData)}>Add To Card</button>
    </div>
  );
};

export default Product;
