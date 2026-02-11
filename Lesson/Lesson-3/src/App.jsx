import React, { useEffect, useState } from "react";
import "./App.css";
import SingleuserData from "./components/SingleuserData/SingleuserData";

function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7  ">
      {allData.map((singleData) => (
        <SingleuserData singleData={singleData}></SingleuserData>
      ))}
    </div>
  );
}

export default App;
