import React from "react";
import "./SingleInfoCard.css";

const SingleInfoCard = ({ singleDataCard }) => {
  const { id, name, price, brand, color } = singleDataCard;

  return (
    <div>
      <h1>SingleInfoCard</h1>

      <p> {id} </p>
      <p> {name} </p>
      <p> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>
    </div>
  );
};

export default SingleInfoCard;
