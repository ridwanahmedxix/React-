import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <button
        className="bg-green-400  hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  "
        onClick={() => setCount(count + 1)}
      >
        Count Number {count}{" "}
      </button>
    </div>
  );
}
export default App;
