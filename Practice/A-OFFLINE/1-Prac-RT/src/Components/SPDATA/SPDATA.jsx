import React from "react";

const SPDATA = ({ singlePData }) => {
  const { id, name, price, color, brand } = singlePData;
  return (
    <div className="border-[3px] border-green-500 my-4 py-4 px-2 rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
    </div>
  );
};

export default SPDATA;
