import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("userData.json");
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Products;
