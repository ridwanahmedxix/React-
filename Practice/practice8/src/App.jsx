import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

export const ContextCount = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContextCount.Provider value={count}>
        <Navbar></Navbar>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]"
        >
          Count - {count}
        </button>
      </ContextCount.Provider>
    </div>
  );
}
export default App;
