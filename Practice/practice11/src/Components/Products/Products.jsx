import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {product.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
};

export default Products;
