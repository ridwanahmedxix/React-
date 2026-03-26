import React from "react";

const PlaceMent = ({ placementData }) => {
  return (
    <div className="ml-5">
      <h1>Add To Card </h1>
      {placementData.map((SPDATA) => (
        <SPDATA key={SPDATA.id} SPDATA={SPDATA}></SPDATA>
      ))}
    </div>
  );
};

export default PlaceMent;
