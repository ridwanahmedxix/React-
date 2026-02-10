import React, { useEffect, useState } from "react";
import "./App.css";
import SingleUserData from "./Components/singleUserData";

function App() {
  const [allDtta, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div>
      <h1>Hello World</h1>

      {allDtta.map((singleData) => (
        <SingleUserData singleData={singleData}></SingleUserData>
      ))}
    </div>
  );
}

export default App;
