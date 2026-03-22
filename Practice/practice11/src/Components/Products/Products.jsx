import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
