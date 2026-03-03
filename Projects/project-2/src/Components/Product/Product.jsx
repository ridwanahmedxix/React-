import React from "react";

const Product = ({ singleData }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="border-[3px] border-purple-600 py-4 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button className="bg-purple-500 py-2 px-4 mt-2 rounded text-white hover:bg-purple-700 transition ">
        More Info
      </button>
    </div>
  );
};

export default Product;
