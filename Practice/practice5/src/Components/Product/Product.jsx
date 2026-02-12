import React from "react";
import "./Product.css";

const Product = ({ singleData }) => {
  const { name, age, location } = singleData;

  return (
    <div className="SingleCard">
      <h2> Name : {name} </h2>
      <h3> Age : {age} </h3>
      <h4> Location : {location} </h4>
    </div>
  );
};

export default Product;
