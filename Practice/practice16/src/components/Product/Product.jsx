import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, brand, color } = singleProduct;

  return (
    <div className="border-[2px] rounded border-green-500 py-2 px-4 text-center m-3 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
      <br />
      <button className="bg-green-600 text-white py-1 px-2 mb-2 rounded">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
