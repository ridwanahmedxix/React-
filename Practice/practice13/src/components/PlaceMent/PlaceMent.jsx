import React from "react";
import SingleLP from "../SingleLP/SingleLP";

const PlaceMent = ({ cart }) => {
  return (
    <div>
      {cart.map((SingleLaptop) => (
        <SingleLP key={SingleLaptop.id} SingleLaptop={SingleLaptop}></SingleLP>
      ))}
    </div>
  );
};

export default PlaceMent;
