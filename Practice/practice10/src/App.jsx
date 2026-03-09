import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [card, setCard] = useState([]);
  const addToCard = (singleDataReceve) => {
    const newCard = [...card, singleDataReceve];
    setCard(newCard);
  };

  return (
    <div className="flex gap-5">
      <Products addToCard={addToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
}
export default App;
