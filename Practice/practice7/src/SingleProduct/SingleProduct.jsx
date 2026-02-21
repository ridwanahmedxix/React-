import React from "react";

const SingleProduct = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;
  return (
    <div>
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SingleProduct;
