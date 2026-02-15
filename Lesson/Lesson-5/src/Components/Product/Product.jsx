import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div>
      <h3>Id - {id} </h3>
      <h2> Name - {name} </h2>
      <h4> Price - {price} </h4>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default Product;
