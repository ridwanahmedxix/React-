import React from "react";
import "./PlaceMent.css";
import SingleCard from "../SingleCard/SingleCard";
const PlaceMent = ({ place }) => {
  console.log(place);

  return (
    <div>
      <h1>PlaceMent Section </h1>

      {place.map((singleCard) => (
        <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>
      ))}
    </div>
  );
};

export default PlaceMent;
