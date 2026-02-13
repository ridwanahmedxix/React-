import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

function Products({ AddToCard }) {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  return (
    <div className="Parent_singleProductCard">
      {allProduct.map((singleProduct) => (
        <Product
          key={singleProduct.id}
          singleProduct={singleProduct}
          AddToCard={AddToCard}
        ></Product>
      ))}
    </div>
  );
}

export default Products;
