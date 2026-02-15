import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      {singleProduct.map((singleData) => (
        <Product key={singleData.id} singleData={singleData}></Product>
      ))}
    </div>
  );
};

export default Products;
