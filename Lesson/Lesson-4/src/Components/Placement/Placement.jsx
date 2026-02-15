import React from "react";
import "./Placement.css";
import SingleCardM from "../SingleCardM/SingleCardM";

const Placement = ({ card }) => {
  console.log(card);
  return (
    <div>
      <h1>Placement</h1>

      {card.map((singleCard) => (
        <SingleCardM singleCard={singleCard}></SingleCardM>
      ))}
    </div>
  );
};

export default Placement;
