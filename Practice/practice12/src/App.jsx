import React, { useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";
import { ContextOne } from "./Contexts/Context1";

function App() {
  const [dataa, setDataa] = useState("Hello World");

  return (
    <div>
      <ContextOne.Provider value={dd}>
        <FirstNav></FirstNav>
        <button className="bg-blue-400 py-3 px-4 text-3xl  my-4 rounded ">
          Main
        </button>
      </ContextOne.Provider>
    </div>
  );
}
export default App;
