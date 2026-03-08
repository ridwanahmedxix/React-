import React, { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("products.json");
  }, []);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
