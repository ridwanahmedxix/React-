import React from "react";
import "./OneCard.css";

const OneCard = ({ singleCardInfo }) => {
  const { id, name, price, brand, color } = singleCardInfo;

  return (
    <div className="One_Card_Design">
      <p> {id} </p>
      <p> {name} </p>
      <p> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>
    </div>
  );
};

export default OneCard;
