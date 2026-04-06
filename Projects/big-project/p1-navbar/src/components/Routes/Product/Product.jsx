import React from "react";

const Product = ({ singleData }) => {
  const { image, name, price, brand, color } = singleData;

  return (
    <div className="text-center p-3 ">
      <img width="170px" src={image} alt="image" />
      <p className="font-bold"> {name} </p>
      <p className="font-medium text-red-600"> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>

      <button className="bg-green-400 py-2 px-4 mt-2 text-white rounded-[10px] hover:bg-purple-500  ">
        {" "}
        Add To Cart{" "}
      </button>
    </div>
  );
};

export default Product;
