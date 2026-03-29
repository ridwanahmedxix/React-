import React from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";
import { ContextOne, ContextProvider } from "./Contexts/Context1";

function App() {
  return (
    <div>
      <ContextProvider>
        <FirstNav></FirstNav>
        <button className="bg-blue-400 py-3 px-4 text-3xl  my-4 rounded ">
          Main
        </button>
      </ContextProvider>
    </div>
  );
}
export default App;
