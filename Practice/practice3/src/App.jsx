import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const increaseHandle = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decreaseHandle = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  useEffect(() => {
    alert("This is a useEffect Alert");
  }, [count]);

  return (
    <div>
      <h1>Number : {count} </h1>
      <button onClick={increaseHandle}>Increase</button>
      <button onClick={decreaseHandle}>Decrease</button>
    </div>
  );
}

export default App;
