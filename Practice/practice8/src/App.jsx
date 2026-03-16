import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="bg-green-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]"
        onClick={() => setCount(count + 1)}
      >
        Count - {count}{" "}
      </button>
    </div>
  );
}

export default App;
