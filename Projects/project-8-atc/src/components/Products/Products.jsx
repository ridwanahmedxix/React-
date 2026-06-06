import React, { useEffect, useState } from "react";

const Products = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setLaptop(data));
  }, []);

  return <div>Products</div>;
};

export default Products;
