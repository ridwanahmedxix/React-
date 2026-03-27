import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, color, brand } = singleProduct;

  return (
    <div className="border-[3px] border-blue-500 py-4 px-2 rounded-[10px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
    </div>
  );
};

export default Product;
