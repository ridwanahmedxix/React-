import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ addToCard }) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 ">
      {productData.map((singleData) => (
        <Product
          key={singleData.id}
          singleData={singleData}
          addToCard={addToCard}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
