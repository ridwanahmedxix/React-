import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div>
      <p> Id - {id} </p>
    </div>
  );
};

export default Product;
