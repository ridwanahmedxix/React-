import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [price, setPrice] = useState(10);
  const increaseHandle = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  const decreaseHandele = () => {
    const newPrice = price - 1;
    setPrice(newPrice);
  };

  return (
    <div>
      <h1> Price : {price} </h1>
      <button onClick={increaseHandle}>Increase</button>
      <button onClick={decreaseHandele}>Decrease</button>
    </div>
  );
};

export default App;
