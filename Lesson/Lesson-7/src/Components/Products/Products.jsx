import React, { useEffect, useState } from "react";

const Products = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <h1>Products </h1>
    </div>
  );
};

export default Products;
