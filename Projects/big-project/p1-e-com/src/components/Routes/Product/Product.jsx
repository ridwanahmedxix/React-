import React from "react";

const Product = ({ singleData, AddToCart }) => {
  const { image, name, price, brand, color } = singleData;

  return (
    <div className="text-center p-3 ">
      <img width="170px" src={image} alt="image" />
      <p className="font-bold"> {name} </p>
      <p className="font-medium text-red-600"> Price - {price} </p>
      <p> {brand} </p>
      <p> {color} </p>

      <button
        onClick={() => AddToCart(singleData)}
        className="relative px-5 py-2.5 mt-2 overflow-hidden rounded bg-green-500 text-white group transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 rotate-12 bg-white opacity-10 transform translate-x-12 transition-all duration-1000 ease group-hover:-translate-x-40"></span>

        <span className="relative">Add To Cart</span>
      </button>
    </div>
  );
};

export default Product;
