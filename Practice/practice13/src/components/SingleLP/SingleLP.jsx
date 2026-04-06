import React from "react";

const SingleLP = ({ SingleLaptop }) => {
  const { image, name, price, brand, color } = SingleLaptop;

  return (
    <div className=" place-items-center border-[3px] p-3 ">
      <img src={image} width="200px" alt={name} />
      <p> {name} </p>
      <p> {price} </p>
      <p> {brand} </p>
      <p> {color} </p>
    </div>
  );
};

export default SingleLP;
