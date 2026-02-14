import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div>
      <h4> Id - {id} </h4>
      <h2> Name - {name} </h2>
      <h3> Price - {price} </h3>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default Product;
