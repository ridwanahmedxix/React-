import React from "react";

const Product = ({ singleProduct }) => {
  const { id, name, price, color, brand } = singleProduct;

  return (
    <div className="border-[3px] border-blue-600 py-5 px-3 rounded-[15px] ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Price - {price} </p>
      <p> Color - {color} </p>
      <p> Brand - {brand} </p>
    </div>
  );
};

export default Product;
