import React from "react";

const SingleLP = ({ singleLaptop }) => {
  const { id, name, price, brand, color } = singleLaptop;
  return (
    <div className="text-center border-[2px] p-3 my-5 border-blue-500 py-2 px-3 rounded ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Brand - {brand} </p>
      <p> Color - {color} </p>
    </div>
  );
};

export default SingleLP;
