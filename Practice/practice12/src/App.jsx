import React, { createContext, useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FirstNav></FirstNav>

      <CountContext.Provider value={count}>
        <button
          className="bg-green-400 py-3 px-4 text-3xl rounded "
          onClick={() => setCount(count + 1)}
        >
          Counter - {count}
        </button>
      </CountContext.Provider>
    </div>
  );
}
export default App;
