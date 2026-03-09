import React from "react";
import SinglePData from "../SinglePData/SinglePData";

const PlaceMent = ({ card }) => {
  return (
    <div>
      {card.map((sideData) => (
        <SinglePData key={sideData.id} sideData={sideData}></SinglePData>
      ))}
    </div>
  );
};

export default PlaceMent;
