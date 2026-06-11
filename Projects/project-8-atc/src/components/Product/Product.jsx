import React from "react";

const Product = ({ singleLaptop }) => {
  const { id, name, price, brand, color } = singleLaptop;

  return (
    <div className=" border-2 border-blue-600 m-3 rounded-[20px]  py-3 px-2">
      <p className="py-1"> Id - {id}</p>
      <p className="py-1"> Name - {name}</p>
      <p className="py-1"> Price - {price}</p>
      <p className="py-1"> Brand - {brand}</p>
      <p className="py-1"> Color - {color}</p>
    </div>
  );
};

export default Product;
