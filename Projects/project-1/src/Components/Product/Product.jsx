import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="border-[2px] border-emerald-500 py-4 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <button className="bg-purple-500 py-2 px-3 mt-2 text-white ">
        Add To Card
      </button>
    </div>
  );
};

export default Product;
