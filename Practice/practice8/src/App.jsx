import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <button onClick={() => setCount(count + 1)}>Click Me - {count} </button>
    </div>
  );
}

export default App;
