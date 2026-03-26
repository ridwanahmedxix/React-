import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, color, brand } = singleProduct;

  return (
    <div className=" border-[3px] border-green-500 py-5 px-2 rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
      <button
        onClick={() => AddToCart(singleProduct)}
        className="bg-purple-500 text-white py-2 px-4 rounded-[10px] mt-3 hover:bg-purple-600 transition "
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
