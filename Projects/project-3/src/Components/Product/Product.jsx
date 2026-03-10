import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div>
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {price} </p>
    </div>
  );
};

export default Product;
