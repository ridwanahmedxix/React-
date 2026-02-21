import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div>
      <h1> {name} </h1>
    </div>
  );
};

export default Product;
