import React, { useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);
  return (
    <div>
      <button> Increase </button>
    </div>
  );
}

export default App;
