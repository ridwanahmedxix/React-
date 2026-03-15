import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Navbar></Navbar>
        <button
          className="bg-green-400  hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  "
          onClick={() => setCount(count + 1)}
        >
          Count Number {count}{" "}
        </button>
      </CountContext.Provider>
    </div>
  );
}
export default App;
