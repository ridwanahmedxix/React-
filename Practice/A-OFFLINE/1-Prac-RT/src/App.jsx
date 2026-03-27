import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [card, setCard] = useState([]);

  const AddToCard = (singleProductReceive) => {
    const newCard = [...card, singleProductReceive];
    setCard(newCard);
  };

  return (
    <div className="flex gap-4">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
}
export default App;
