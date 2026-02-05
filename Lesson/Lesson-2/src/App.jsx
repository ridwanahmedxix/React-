import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1> Count : {price} </h1>
      <button onClick={increaseHandle}> Increase </button>
    </div>
  );
}

export default App;
