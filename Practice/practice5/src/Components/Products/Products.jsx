import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("userData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div>
      <h1>Hello</h1>

      {allData.map((singleData) => (
        <Product singleData={singleData}></Product>
      ))}
    </div>
  );
};

export default Products;
