import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="bg-green-400 text-white py-3 px-5 rounded-[15px]  "
        onClick={() => setCount(count + 1)}
      >
        Count Number {count}{" "}
      </button>

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        nulla.
      </p> */}
    </div>
  );
}
export default App;
