import React from "react";

const OneCard = ({ singleCardInfo }) => {
  const { id, name, price, brand, color } = singleCardInfo;

  return (
    <div>
      <p> {id} </p>
      <p> {name} </p>
      <p> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>
    </div>
  );
};

export default OneCard;
