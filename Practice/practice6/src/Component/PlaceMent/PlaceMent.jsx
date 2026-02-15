import React from "react";
import "./PlaceMent.css";
import SingleInfoCard from "../SingleInfoCard/SingleInfoCard";

const PlaceMent = ({ singleDataCard }) => {
  return (
    <div className="placeMent_parent">
      <h1> Add To Card Section </h1>

      {singleDataCard.map((singleInfoCard) => (
        <SingleInfoCard
          key={singleInfoCard.id}
          singleDataCard={singleInfoCard}
        />
      ))}
    </div>
  );
};

export default PlaceMent;
