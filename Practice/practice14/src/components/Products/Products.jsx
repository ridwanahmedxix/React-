import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);

  return (
    <div>
      {count.map((singleProduct) => {
        <Product
          key={singleProduct.id}
          singleProduct={singleProduct}
        ></Product>;
      })}
    </div>
  );
};

export default Products;
