import React, { useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(60);

  return (
    <div>
      <button onClick={() => setIncrease(increase + 1)}>
        Increase - {increase}
      </button>
      <button onClick={() => setDecrease(decrease - 1)}>
        {" "}
        Decrease - {decrease}
      </button>
    </div>
  );
}

export default App;
