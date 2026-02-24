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
    <div className="grid grid-cols-3 gap-6">
      {productsData.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
};

export default Products;
