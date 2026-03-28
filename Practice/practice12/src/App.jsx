import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="bg-green-400 py-3 px-4 text-3xl rounded "
        onClick={() => setCount(count + 1)}
      >
        Counter - {count}
      </button>
    </div>
  );
}
export default App;
