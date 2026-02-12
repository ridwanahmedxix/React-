import React, { useEffect, useState } from "react";
import "./Product.css";
import UserData from "../UserData/UserData";

const Product = ({ AddToCard }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("userData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className="userCardParent">
      {allData.map((singleData) => (
        <UserData
          key={singleData.id}
          singleData={singleData}
          AddToCard={AddToCard}
        ></UserData>
      ))}
    </div>
  );
};

export default Product;
