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
      {productData.map((singleData) => (
        <Product key={singleData.id} singleData={singleData}></Product>
      ))}
    </div>
  );
};

export default Products;
