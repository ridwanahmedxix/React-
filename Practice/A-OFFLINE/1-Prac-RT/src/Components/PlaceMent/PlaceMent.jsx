import React from "react";

const PlaceMent = ({ card }) => {
  const { id, name, price, color, brand } = card;

  return (
    <div>
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
    </div>
  );
};

export default PlaceMent;
