import React from "react";
import "./Product.css";

const Product = ({ singleData, AddToCard }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="SingleCard-Design">
      <h4> Id - {id} </h4>
      <h2> Name - {name} </h2>
      <h3> Price - {price} </h3>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button
        onClick={() => AddToCard(singleData)}
        className="AddToCard_Button_Design"
      >
        Add To Card{" "}
      </button>
    </div>
  );
};

export default Product;
