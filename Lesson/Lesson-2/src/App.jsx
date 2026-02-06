import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    alert("This is a Use Alert");
  }, []);

  return (
    <div>
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
