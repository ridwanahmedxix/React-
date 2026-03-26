import React from "react";
import SPDATA from "../SPDATA/SPDATA";

const PlaceMent = ({ placementData }) => {
  return (
    <div className="ml-5">
      <h1>Add To Card </h1>
      {placementData.map((DATA) => (
        <SPDATA key={DATA.id} DATA={DATA}></SPDATA>
      ))}
    </div>
  );
};

export default PlaceMent;
