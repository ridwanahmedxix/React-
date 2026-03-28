import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-red-500">Hello World</h1>

      <button onClick={() => setCount(count + 1)}> Counter - {count} </button>
    </div>
  );
}
export default App;
