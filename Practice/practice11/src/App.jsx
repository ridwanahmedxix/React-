import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [singleData, setSingleData] = useState([]);
  const AddToCard = (singleProductRecive) => {
    const newSingleData = [...singleData, singleProductRecive];
    setSingleData(newSingleData);
  };

  return (
    <div className="flex gap-5">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}
export default App;
