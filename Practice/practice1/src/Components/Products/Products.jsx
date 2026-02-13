import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

function Products() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  return (
    <div>
      <h1>Products section </h1>

      {allProduct.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
}

export default Products;
