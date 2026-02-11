import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("userData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
