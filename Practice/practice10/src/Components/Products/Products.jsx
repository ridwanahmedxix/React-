import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div>
      <Product key={productData} productData={productData}></Product>
    </div>
  );
};

export default Products;
