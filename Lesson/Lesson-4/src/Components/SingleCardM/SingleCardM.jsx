import React from "react";

const SingleCardM = ({ singleCard }) => {
  const [name, phone, address] = singleCard;

  return (
    <div>
      <h1> {name} </h1>
      <h2> {phone} </h2>
      <h3> {address} </h3>
    </div>
  );
};

export default SingleCardM;
