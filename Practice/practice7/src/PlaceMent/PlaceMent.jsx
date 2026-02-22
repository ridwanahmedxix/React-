import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const PlaceMent = ({ card }) => {
  return (
    <div>
      <h1 className="bg-pink-400 py-4 px-5 ">Add To Card Section</h1>
      {card.map((singleData) => (
        <SingleProduct
          //   key={singleData.id}
          singleData={singleData}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default PlaceMent;
