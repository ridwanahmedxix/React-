import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [price, setPrice] = useState(10);

  return (
    <div>
      <h1>Increase : {price} </h1>
      <button onClick={increaseHandle}>Increase</button>
    </div>
  );
};

export default App;
