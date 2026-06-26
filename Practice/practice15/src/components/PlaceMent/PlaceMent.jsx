import React from "react";

const PlaceMent = ({ cart }) => {
  const { id, name, price, brand, color } = cart;

  return (
    <div className="border-[2px] border-cyan-400 py-2 text-[19px] m-[10px] rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default PlaceMent;
