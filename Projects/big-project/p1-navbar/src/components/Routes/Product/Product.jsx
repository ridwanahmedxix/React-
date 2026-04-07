import React from "react";

const Product = ({ singleData, AddToCart }) => {
  const { image, name, price, brand, color } = singleData;

  return (
    <div className="text-center p-3 ">
      <img width="170px" src={image} alt="image" />
      <p className="font-bold"> {name} </p>
      <p className="font-medium text-red-600"> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>

      <button
        onClick={() => AddToCart(singleData)}
        className="relative inline-block px-5 py-2.5 mt-2 font-medium text-green-600 bg-green-100 rounded-[10px] overflow-hidden group"
      >
        <span className="absolute top-0 left-0 w-full h-0 bg-purple-500 opacity-90 transition-all duration-300 ease-out group-hover:h-full"></span>

        <span className="relative group-hover:text-white">Add To Cart</span>
      </button>
    </div>
  );
};

export default Product;
