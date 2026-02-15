import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = ({ AddToCard }) => {
  const [singleProductData, setSingleProductData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleProductData(data));
  }, []);

  return (
    <div className="parent_SingleCard_Design">
      {singleProductData.map((singleData) => (
        <Product
          key={singleData.id}
          singleData={singleData}
          AddToCard={AddToCard}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
