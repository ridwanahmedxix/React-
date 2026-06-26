import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ AddToCart }) => {
  const [productStore, setProductStore] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductStore(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 my-7 mx-10 ">
      {productStore.map((singleProduct) => (
        <Product
          key={singleProduct.id}
          singleProduct={singleProduct}
          AddToCart={AddToCart}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
