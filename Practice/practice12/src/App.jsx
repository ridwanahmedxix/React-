import React, { useState } from "react";
import "./App.css";
import FirstNav from "./Components/FirstNav/FirstNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FirstNav></FirstNav>
      <button
        className="bg-blue-400 py-3 px-4 text-3xl my-3 rounded "
        onClick={() => setCount(count + 1)}
      >
        Count - {count}
      </button>
    </div>
  );
}

export default App;
