import React, { useEffect, useState } from "react";
import "./App.css";
import UserData from "./Components/UserData";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("userData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className="userCardParent">
      {allData.map((singleData) => (
        <UserData key={singleData.id} singleData={singleData}></UserData>
      ))}
    </div>
  );
}

export default App;
