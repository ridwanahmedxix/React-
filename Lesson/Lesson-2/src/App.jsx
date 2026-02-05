import React, { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState(10);

  const increaseHandle = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  const decreaseHandle = () => {
    const newPrice = price - 1;
    setPrice(newPrice);
  };

  return (
    <div>
      <h1> Count : {price} </h1>
      <button onClick={increaseHandle}> Increase </button>
      <button onClick={decreaseHandle}>Decrease </button>
    </div>
  );
}

export default App;
