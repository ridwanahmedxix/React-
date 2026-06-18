import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div>
      <p> ID - {id} </p>
      <p> NAME - {name} </p>
      <p> PRICE - {price} </p>
      <p> BRAND - {brand} </p>
      <p> COLOR - {color} </p>
    </div>
  );
};

export default Product;
