import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  return (
    <div>
      {productsData.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
};

export default Products;
