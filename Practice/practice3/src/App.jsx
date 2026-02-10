import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [allDtta, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users");
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
