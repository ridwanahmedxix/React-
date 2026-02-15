import React, { useState } from "react";
import "./App.css";
import Product from "./Components/Product/Product";
import Placement from "./Components/Placement/Placement";

const App = () => {
  const [card, setCard] = useState([]);

  const AddToCard = (placement) => {
    console.log("Clicked");

    const newPlacement = [...card, placement];
    setCard(newPlacement);
  };

  return (
    <div className="appJsxParent">
      <Product AddToCard={AddToCard}></Product>
      <Placement card={card}></Placement>
    </div>
  );
};

export default App;
