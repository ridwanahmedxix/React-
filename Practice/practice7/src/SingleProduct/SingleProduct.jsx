import React from "react";

const SingleProduct = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;
  return (
    <div className="border-[3px] border-green-400 my-3 px-2 py-3 rounded  ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SingleProduct;
