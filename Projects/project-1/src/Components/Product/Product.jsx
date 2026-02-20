import React from "react";

const Product = ({ singleProduct, AddToCard }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="border-[2px] border-emerald-500 py-4 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button
        onClick={() => AddToCard(singleProduct)}
        className="bg-purple-500 py-2 px-3 mt-2 text-white hover:bg-purple-700 transition "
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
