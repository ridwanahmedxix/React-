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
          className="bg-green-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]"
          onClick={() => setCount(count + 1)}
        >
          Click Me - {count}{" "}
        </button>
      </CountContext.Provider>
    </div>
  );
}

export default App;
