import React from "react";
import "./Placement.css";
import SingleCard from "../SingleCard/SingleCard";

const Placement = ({ place }) => {
  console.log(place);
  return (
    <div>
      <h1>ADD TO CARD</h1>

      {place.map((singleCard) => (
        <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>
      ))}
    </div>
  );
};

export default Placement;
