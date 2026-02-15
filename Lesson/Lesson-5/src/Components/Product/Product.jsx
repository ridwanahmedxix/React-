import React from "react";
import "./Product.css";

const Product = ({ singleData, AddToCardData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="singleCard_Design">
      <h3>Id - {id} </h3>
      <h2> Name - {name} </h2>
      <h4> Price - {price} </h4>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button onClick={AddToCardData} className="AddToCardBtn_Design">
        Add To Card
      </button>
    </div>
  );
};

export default Product;
