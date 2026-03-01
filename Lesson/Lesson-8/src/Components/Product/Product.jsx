import React from "react";

const Product = ({ product }) => {
  const { id, name, email, address } = product;

  return (
    <div className="border-[3px] border-red-500 py-5  ">
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Email - {email} </p>
      <p> Address - {address.city} </p>
      <button className="bg-red-400 py-2 px-4 mt-3 rounded">More Info</button>
    </div>
  );
};

export default Product;
