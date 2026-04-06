import React from "react";
import SingleLP from "../SingleLP/SingleLP";

const PlaceMent = ({ cart }) => {
  return (
    <div>
      {/* <h1 className="font-bold  text-3xl py-3 pr-3  mt-8 sm:mt-12 ">
        Add To Cart Section
      </h1> */}

      {cart.map((singleLaptop) => (
        <SingleLP singleLaptop={singleLaptop}></SingleLP>
      ))}
    </div>
  );
};

export default PlaceMent;
