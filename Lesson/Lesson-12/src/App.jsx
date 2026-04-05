import React, { useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);

  const loading = () => {
    console.log("Something is loading");
  };

  return (
    <div>
      <h1> {loading()} </h1>
      <br />
      <button onClick={() => setIncrease(increase + 1)}> Increase </button>
      <button onClick={() => setDecrease(decrease - 1)}> Decrease </button>
    </div>
  );
}

export default App;
