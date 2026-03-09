import React from "react";

const SinglePData = ({ sideData }) => {
  const { id, name, price, brand, color } = sideData;

  return (
    <div className="border-[3px]  border-purple-500 p-6 rounded-[15px] my-4 ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SinglePData;
