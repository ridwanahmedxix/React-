import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ AddToCard }) => {
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6  ">
      {singleData.map((singleProduct) => (
        <Product
          key={singleProduct.id}
          singleProduct={singleProduct}
          AddToCard={AddToCard}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
