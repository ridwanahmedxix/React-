import React, { useState } from "react";
import "./App.css";
import Products from "./Component/Products/Products";
import PlaceMent from "./Component/PlaceMent/PlaceMent";

function App() {
  const [singleDataCard, setSingleDataCard] = useState([]);

  const AddToCard = (placementProps) => {
    const NewsingleDataCard = { ...singleDataCard, placementProps };
    setSingleDataCard(NewsingleDataCard);
  };

  return (
    <div className="APP_JSX">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent singleDataCard={singleDataCard}></PlaceMent>
    </div>
  );
}

export default App;
