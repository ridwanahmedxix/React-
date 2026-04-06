import React from "react";

const Product = ({ singleData, AddToCard }) => {
  const { image, name, price, brand, color } = singleData;

  return (
    <div>
      <div className=" place-items-center border-[3px] p-3 ">
        <img src={image} width="200px" alt={name} />
        <p> {name} </p>
        <p> {price} </p>
        <p> {brand} </p>
        <p> {color} </p>
        <button
          onClick={() => AddToCard(singleData)}
          className="bg-slate-600 text-white py-2 px-3 my-3"
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Product;
