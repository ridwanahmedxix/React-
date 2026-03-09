import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="border-[3px]  border-green-400 py-5 rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button>Add To Card</button>
    </div>
  );
};

export default Product;
