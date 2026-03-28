import React, { useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FirstNav></FirstNav>

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
