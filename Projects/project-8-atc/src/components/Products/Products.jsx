import React, { useEffect, useState } from "react";

const Products = () => {
  const [setData, Data] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>Products</div>;
};

export default Products;
