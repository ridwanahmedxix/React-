import React, { useEffect, useState } from "react";

const Products = () => {
  const [productStore, setProductStore] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductStore(data));
  }, []);
  return <div>Products</div>;
};

export default Products;
