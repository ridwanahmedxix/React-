import React from "react";

const SPDATA = ({ DATA }) => {
  const { id, name, price, brand, color } = DATA;

  return (
    <div>
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SPDATA;
