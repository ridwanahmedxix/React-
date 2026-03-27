import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, color, brand } = singleProduct;

  return (
    <div className="border-[3px] border-blue-500 py-4 px-2 rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
      <button className="bg-blue-500 text-white py-2 px-3 mt-2 rounded-[8px] hover:bg-blue-600 transition ">
        Add To Card
      </button>
    </div>
  );
};

export default Product;
