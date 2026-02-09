import React, { useEffect, useState } from "react";
import "./App.css";
import singleUserData from "./components/singleUserData/singleUserData";
function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []).return(
    <div>
      <h1>Hello World</h1>

      {allData.map((singleData) => (
        <singleUserData singleData={singleData}></singleUserData>
      ))}
    </div>,
  );
}

export default App;
