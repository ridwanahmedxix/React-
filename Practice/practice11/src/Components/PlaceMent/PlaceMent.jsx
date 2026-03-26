import React from "react";
import SingleInfoProduct from "../SingleInfoProduct/SingleInfoProduct";

const PlaceMent = ({ singleData }) => {
  return (
    <div>
      <h1 className="text-3xl text-blue-500 m-4 ">Add To Card </h1>

      {singleData.map((singleInfoProduct) => (
        <SingleInfoProduct
          key={singleInfoProduct.id}
          singleInfoProduct={singleInfoProduct}
        ></SingleInfoProduct>
      ))}
    </div>
  );
};

export default PlaceMent;
