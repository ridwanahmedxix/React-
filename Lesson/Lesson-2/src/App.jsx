import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  useEffect(() => {
    alert("This is a Alert");
  }, []);

  // useEffect(() => {
  //   alert(" Count State Was Chabged");
  // }, [count]);

  return (
    <div>
      <h1> Increase count : {count} </h1>
      <button onClick={increaseNumber}>Click</button>
    </div>
  );
}

export default App;
