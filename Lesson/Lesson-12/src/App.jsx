import React, { useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);
  return (
    <div>
      <button onClick={() => setIncrease(increase + 1)}> Increase </button>
      <button onClick={() => setDecrease(decrease - 1)}> Decrease </button>
    </div>
  );
}

export default App;
