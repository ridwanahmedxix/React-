import React from "react";

const SingleProduct = ({ singleProductData }) => {
  const { id, name, price, brand, color } = singleProductData;

  return (
    <div className="border-[3px] border-purple-400 my-4 p-6  rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {price} </p>
    </div>
  );
};

export default SingleProduct;
