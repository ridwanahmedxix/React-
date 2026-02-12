import React, { useEffect, useState } from "react";
import UserData from "../UserData/UserData";

const Product = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("userData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      {allData.map((singleData) => (
        <UserData key={singleData.id} singleData={singleData}></UserData>
      ))}
    </div>
  );
};

export default Product;
