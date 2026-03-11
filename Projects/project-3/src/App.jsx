import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [cardInfo, setCardInfo] = useState([]);

  const AddToCard = (singleDataReceve) => {
    const newCardInfo = [...cardInfo, singleDataReceve];
    setCardInfo(newCardInfo);
  };

  return (
    <div className="flex ">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent cardInfo={cardInfo}></PlaceMent>
    </div>
  );
}

export default App;
