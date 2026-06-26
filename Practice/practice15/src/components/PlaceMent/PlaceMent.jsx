import React from "react";

const PlaceMent = ({ cart }) => {
  return (
    <div>
      {cart.map((OneData) => (
        <OneData key={OneData.id} OneData={OneData}></OneData>
      ))}
    </div>
  );
};

export default PlaceMent;
