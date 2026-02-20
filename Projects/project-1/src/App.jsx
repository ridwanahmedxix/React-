import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [card, setCard] = useState([]);
  const AddToCard = (singleProduct) => {
    const newCard = [...card, singleProduct];
    setCard(newCard);
  };

  return (
    <div className="flex  gap-5">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
}

export default App;
