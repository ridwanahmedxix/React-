import React from "react";
import SingleCardData from "../SingleCardData/SingleCardData";

const PlaceMent = ({ card }) => {
  return (
    <div>
      <h1 className="text-3xl ">Add To Card Section</h1>

      {card.map((singleCardData) => (
        <SingleCardData
          key={singleCardData.id}
          singleCardData={singleCardData}
        ></SingleCardData>
      ))}
    </div>
  );
};

export default PlaceMent;
