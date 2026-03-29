import React from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";

function App() {
  return (
    <div>
      <FirstNav></FirstNav>
      <button className="bg-blue-400 py-3 px-4 text-3xl  my-4 rounded ">
        Main
      </button>
    </div>
  );
}
export default App;
