import React from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";
import { ContextProvider } from "./Contexts/Context1";

function App() {
  return (
    <div>
      <ContextProvider>
        <FirstNav></FirstNav>
        <button className="bg-teal-400 py-3 px-4  my-4 text-3xl rounded ">
          Main
        </button>
      </ContextProvider>
    </div>
  );
}
export default App;
