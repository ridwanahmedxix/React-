import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World </h1>
      <button onClick={() => setCount(count + 1)}>Count Number {count} </button>
    </div>
  );
}
export default App;
