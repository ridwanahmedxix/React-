import React from "react";

const Product = ({ singleData, addToCard }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="border-[3px]  border-green-400 py-5 px-3 rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button
        onClick={() => addToCard(singleData)}
        className="bg-green-400 py-3 px-6 mt-2 rounded-[10px]  hover:bg-green-500 transition "
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
