import React from "react";
import SPDATA from "../SPDATA/SPDATA";

const PlaceMent = ({ card }) => {
  return (
    <div>
      {card.map((singlePData) => (
        <SPDATA key={singlePData.id} singlePData={singlePData}></SPDATA>
      ))}
    </div>
  );
};

export default PlaceMent;
