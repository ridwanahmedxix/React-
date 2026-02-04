import React, { useState } from "react";
import "./App";

const App = () => {
  const [price, setPrice] = useState(99);

  const increaseHandle = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  return (
    <div>
      <h1> Price : {price} </h1>
      <button onClick={increaseHandle}>Increase</button>
    </div>
  );
};

export default App;
