import React, { createContext, useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <FirstNav></FirstNav>
        <button
          className="bg-blue-400 py-3 px-4 text-3xl my-3 rounded "
          onClick={() => setCount(count + 1)}
        >
          Count - {count}
        </button>
      </CountContext.Provider>
    </div>
  );
}

export default App;
