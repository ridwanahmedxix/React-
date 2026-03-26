import React from "react";

const SingleInfoProduct = ({ singleInfoProduct }) => {
  const { id, name, price, color, brand } = singleInfoProduct;

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

export default SingleInfoProduct;
