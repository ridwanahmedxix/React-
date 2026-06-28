import React from "react";
import SingleLP from "../SingleLP/SingleLP";

const PlaceMent = ({ cart }) => {
  return (
    <div>
      {cart.map((singleLaptop) => (
        <SingleLP key={singleLaptop.id} singleLaptop={singleLaptop}></SingleLP>
      ))}
    </div>
  );
};

export default PlaceMent;
