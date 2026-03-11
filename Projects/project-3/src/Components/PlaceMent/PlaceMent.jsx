import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const PlaceMent = ({ cardInfo }) => {
  return (
    <div className="ml-10">
      <h1>PlaceMent</h1>

      {cardInfo.map((singleProductData) => (
        <SingleProduct
          key={singleProductData.id}
          singleProductData={singleProductData}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default PlaceMent;
