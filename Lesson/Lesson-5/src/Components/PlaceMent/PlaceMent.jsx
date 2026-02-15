import React from "react";
import OneCard from "../OneCard/OneCard";

const PlaceMent = ({ cardData }) => {
  return (
    <div>
      <h1> PlaceMent Section </h1>

      {cardData.map((singleCardInfo) => (
        <OneCard
          key={singleCardInfo.id}
          singleCardInfo={singleCardInfo}
        ></OneCard>
      ))}
    </div>
  );
};

export default PlaceMent;
