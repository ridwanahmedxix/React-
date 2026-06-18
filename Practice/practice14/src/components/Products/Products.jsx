import React, { useEffect, useState } from "react";

const Products = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);

  return <div></div>;
};

export default Products;
