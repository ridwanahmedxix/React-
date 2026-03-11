import React from "react";

const Product = ({ singleData, AddToCard }) => {
  const { id, name, price, brand, color } = singleData;

  return (
    <div className="border-[3px] border-green-400 py-5 rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {price} </p>
      <button
        onClick={() => AddToCard(singleData)}
        className="bg-green-500 py-2 px-5 mt-3 rounded-[10px] hover:bg-green-700 text-white transition "
      >
        Add To Card{" "}
      </button>
    </div>
  );
};

export default Product;
