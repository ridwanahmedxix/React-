import React from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";

function App() {
  return (
    <div>
      <FirstNav></FirstNav>
      <button className="bg-teal-400 py-3 px-4  my-4 text-3xl rounded ">
        Main
      </button>
    </div>
  );
}
export default App;
