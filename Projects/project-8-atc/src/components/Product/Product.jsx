import React from "react";

const Product = ({ singleLaptop }) => {
  const { id, name, price, brand, color } = singleLaptop;

  return (
    <div>
      <p> Id - {id}</p>
      <p> Name - {name}</p>
      <p> Price - {price}</p>
      <p> Brand - {brand}</p>
      <p> Color - {color}</p>
    </div>
  );
};

export default Product;
