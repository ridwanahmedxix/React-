import React, { useEffect, useState } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  return (
    <div>
      <h1>Hell</h1>
    </div>
  );
};

export default Products;
