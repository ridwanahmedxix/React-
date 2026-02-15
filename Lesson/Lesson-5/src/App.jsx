import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [cardData, setCardData] = useState([]);

  const AddToCardData = (singleData) => {
    const newCardData = { ...cardData, singleData };
    setCardData(newCardData);
  };

  return (
    <div className="APP_JSX">
      <Products AddToCardData={AddToCardData}></Products>
      <PlaceMent cardData={cardData}></PlaceMent>
    </div>
  );
}

export default App;
