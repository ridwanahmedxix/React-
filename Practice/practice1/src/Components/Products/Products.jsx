import React, { useEffect, useState } from "react";
import "./Products.css";

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
    </div>
  );
}

export default Products;
