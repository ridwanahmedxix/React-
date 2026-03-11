import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [cardInfo, setCardInfo] = useState([]);

  const AddToCard = () => {
    const newCardInfo = [...cardInfo];
  };

  return (
    <div className="flex ">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}

export default App;
