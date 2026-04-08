import React from "react";

const SingleLP = ({ singleLaptop }) => {
  const { image, name, price, brand, color } = singleLaptop;

  return (
    <div className="text-center p-3 mt-8 sm:mt-12 ">
      <img width="170px" src={image} alt="image" />
      <p className="font-bold"> {name} </p>
      <p className="font-medium text-red-600"> Price -{price} </p>
      <p> {brand} </p>
      <p> {color} </p>
    </div>
  );
};

export default SingleLP;
