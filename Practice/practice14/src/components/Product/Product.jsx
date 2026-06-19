import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;
  return (
    <div className="text-center m-3 border-2 border-purple-700 py-3 rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <br />
      <button className="bg-green-500 py-1 px-3 rounded hover:bg-green-600 transition ">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
