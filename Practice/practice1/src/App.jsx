import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import Placement from "./Components/Placement/Placement";

function App() {
  const [place, setPlace] = useState([]);

  const AddToCard = (placement) => {
    const newPlace = [...place, placement];
    setPlace(newPlace);
  };

  return (
    <div className="App_JSX_Parent">
      <Products AddToCard={AddToCard}></Products>
      <Placement place={place}></Placement>
    </div>
  );
}

export default App;
