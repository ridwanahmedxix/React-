import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ AddToCard }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 ">
      {product.map((singleProduct) => (
        <Product
          AddToCard={AddToCard}
          key={singleProduct.id}
          singleProduct={singleProduct}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
