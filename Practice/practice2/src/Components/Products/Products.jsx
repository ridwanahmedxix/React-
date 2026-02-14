import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ AddToCard }) => {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div className="Parent_SingleCard_Design">
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
