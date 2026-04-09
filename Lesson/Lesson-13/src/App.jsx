import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  const initialValue = 22;

  const reducer = () => {};

  useReducer(reducer, initialValue);

  return (
    <div>
      <button>Increase</button>
      <button>Decrease</button>
    </div>
  );
}

export default App;
