import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  const initialValue = 22;

  const reducer = (state, action) => {
    if (action === "plus") {
      return state + 1;
    } else if (action === "minus") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1> {count} </h1>
      <br />
      <button onClick={() => dispatch("plus")}>Increase</button>
      <br />
      <br />
      <button onClick={() => dispatch("minus")}>Decrease</button>
    </div>
  );
}

export default App;
