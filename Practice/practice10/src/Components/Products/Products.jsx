import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {singleData.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
};

export default Products;
