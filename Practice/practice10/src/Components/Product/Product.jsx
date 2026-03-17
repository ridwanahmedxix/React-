import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, color, brand } = singleProduct;

  return (
    <div>
      <h1>Product</h1>
      <p> {id} </p>
      <p> {name} </p>
    </div>
  );
};

export default Product;
