import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(22);

  return (
    <div>
      <h1> {count} </h1>
      <br />
      <button>Increase</button>
      <button>Decrease</button>
    </div>
  );
}

export default App;
