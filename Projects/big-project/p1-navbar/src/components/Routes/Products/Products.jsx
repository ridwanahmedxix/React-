import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);
  return (
    <div className=" my-8 sm:my-12 place-items-center grid gap-2 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
      {singleProduct.map((singleData) => (
        <Product key={singleData.id} singleData={singleData}></Product>
      ))}
    </div>
  );
};

export default Products;
