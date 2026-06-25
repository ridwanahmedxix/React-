import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [productStore, setProductStore] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProductStore(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 text-center mx-[70px] py-3 ">
      {productStore.map((singleProduct) => (
        <Product key={singleProduct.id} singleProduct={singleProduct}></Product>
      ))}
    </div>
  );
};

export default Products;
