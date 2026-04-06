import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ AddToCard }) => {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
      {singleProduct.map((singleData) => (
        <Product
          key={singleData.id}
          singleData={singleData}
          AddToCard={AddToCard}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
