import React from "react";

const SingleProduct = ({ singleProductData }) => {
  const { id, name, price, brand, color } = singleProductData;

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

export default SingleProduct;
