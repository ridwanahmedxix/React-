import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>

      <button
        className="bg-green-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]"
        onClick={() => setCount(count + 1)}
      >
        Count - {count}{" "}
      </button>
    </div>
  );
}

export default App;
