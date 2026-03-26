import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [placementData, setPlacementData] = useState([]);

  const AddToCard = (singleData) => {
    const newPlacementData = [...placementData, singleData];
    setPlacementData(newPlacementData);
  };

  return (
    <div className="flex ">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent placementData={placementData}></PlaceMent>
    </div>
  );
}
export default App;
