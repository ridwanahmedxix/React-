import React, { useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";
import { ContextOne } from "./Contexts/Context1";

function App() {
  const [datA, setDatA] = useState("Hello World");

  return (
    <div>
      <ContextOne.Provider value={[datA, setDatA]}>
        <FirstNav></FirstNav>
        <button className="bg-teal-400 py-3 px-4  my-4 text-3xl rounded ">
          Main
        </button>
      </ContextOne.Provider>
    </div>
  );
}
export default App;
