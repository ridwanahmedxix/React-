import React from "react";

const Product = ({ productData }) => {
  const { id, name, price, brand, color } = productData;

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
