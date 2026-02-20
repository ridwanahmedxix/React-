import React from "react";

const SingleCardData = ({ singleCardData }) => {
  const { id, name, price, brand, color } = singleCardData;

  return (
    <div className="border-[2px] border-emerald-500 py-4  my-5">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SingleCardData;
