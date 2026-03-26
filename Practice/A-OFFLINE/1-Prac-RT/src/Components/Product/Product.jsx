import React from "react";

const Product = ({ singleData, AddToCard }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="border-[3px] border-blue-600 py-5 px-2 rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button
        onClick={() => AddToCard(singleData)}
        className="bg-blue-500 py-2 px-3 rounded-[10px] text-white mt-3 hover:bg-blue-600 transition "
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
