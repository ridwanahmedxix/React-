import React, { useEffect, useState } from "react";

const Products = () => {
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);

  return (
    <div>
      <h1>
        https://keep.google.com/u/0/#NOTE/1ohornAc0esKLdJejIetyzNkIDJ9dYS8VG-SVouanL5TkcH--6tvXTQZKkssG1Q
      </h1>
    </div>
  );
};

export default Products;
