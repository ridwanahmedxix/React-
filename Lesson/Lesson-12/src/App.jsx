import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(50);

  const problem = useMemo(() => {
    console.log("Something is loading");
    return increase * 5;
  }, [increase]);

  return (
    <div>
      <h1> {problem} </h1>
      <br />

      <button onClick={() => setIncrease(increase + 1)}>
        Increase - {increase}{" "}
      </button>
      <br />
      <button onClick={() => setDecrease(decrease - 1)}>
        Decrease - {decrease}{" "}
      </button>
    </div>
  );
}
export default App;
