import React from "react";

const Product = ({ singleData }) => {
  const { image, name, price, brand, color } = singleData;

  return (
    <div>
      <div>
        <img src={image} width="300px" alt={name} />
        <p> {name} </p>
        <p> {price} </p>
        <p> {brand} </p>
        <p> {color} </p>
      </div>
    </div>
  );
};

export default Product;
