import React from "react";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1>Increase : {price} </h1>
      <button onClick={increaseHandle}>Increase</button>
    </div>
  );
};

export default App;
