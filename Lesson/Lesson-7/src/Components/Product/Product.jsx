import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="bg-green-500 py-5 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Price - {brand} </p>
      <p> Price - {color} </p>
      <button className="bg-purple-500 py-2 px-4 mt-4 "> Add To Card </button>
    </div>
  );
};

export default Product;
