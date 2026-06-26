import React from "react";
import OneData from "../OneData/OneData";

const PlaceMent = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => (
        <OneData key={item.id} OneData={item} />
      ))}
    </div>
  );
};

export default PlaceMent;
