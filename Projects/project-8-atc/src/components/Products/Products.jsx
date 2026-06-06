import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setLaptop(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4  text-center">
      {laptop.map((singleLaptop) => (
        <Product key={singleLaptop.id} singleLaptop={singleLaptop}></Product>
      ))}
    </div>
  );
};

export default Products;
