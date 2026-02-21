import React from "react";

const Product = ({ singleProduct, AddToCard }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="border-[3px] border-purple-700 py-3 rounded  ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>

      <button
        onClick={() => AddToCard(singleProduct)}
        className="bg-green-400 py-2 px-3 my-3 rounded hover:bg-green-500 transition-[0.4s]"
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
