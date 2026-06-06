import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    fetch("products.json");
  }, []);

  return <div>Products</div>;
};

export default Products;
