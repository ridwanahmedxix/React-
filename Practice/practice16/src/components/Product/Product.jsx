import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="text-center border-[2px] p-3 border-green-500 py-2 px-3 rounded ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <br />
      <button className="bg-purple-500 py-2 px-3 rounded mb-4 text-white hover:bg-purple-600">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
