import React from "react";
import "./SingleCard.css";

const SingleCard = ({ singleCard }) => {
  const { name, price, brand, color } = singleCard;

  return (
    <div>
      <p>Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SingleCard;
