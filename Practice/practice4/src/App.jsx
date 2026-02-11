import React, { useEffect, useState } from "react";
import "./App.css";
import UsersData from "./Components/UsersData";

function App() {
  const [allData, setAllDta] = useState([]);

  useEffect(() => {
    fetch("userInfo.json")
      .then((res) => res.json())
      .then((data) => setAllDta(data));
  }, []);

  return (
    <div>
      {allData.map((singleData) => (
        <UsersData singleData={singleData}></UsersData>
      ))}
    </div>
  );
}

export default App;
