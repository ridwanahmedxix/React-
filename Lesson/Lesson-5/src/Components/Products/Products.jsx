import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = ({ AddToCardData }) => {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div className="Parent_singleCard_Design">
      {singleProduct.map((singleData) => (
        <Product
          key={singleData.id}
          singleData={singleData}
          AddToCardData={AddToCardData}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
