import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [card, setCard] = useState([]);

  const addToCard = (singleData) => {
    const newCard = [...card, singleData];
    setCard(newCard);
  };

  return (
    <div>
      <Products addToCard={addToCard}></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}
export default App;
