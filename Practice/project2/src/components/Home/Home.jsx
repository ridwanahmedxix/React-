import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [price, setPrice] = useState(18);
  const increaseHandel = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  const decreaseHandle = () => {
    const newPrice = price - 1;
    setPrice(newPrice);
  };

  return (
    <div>
      <h1> Price : {price} </h1>

      <button onClick={increaseHandel} id="increase">
        Increase
      </button>

      <button onClick={decreaseHandle} id="decrease">
        Decrease
      </button>
    </div>
  );
};

export default Home;
