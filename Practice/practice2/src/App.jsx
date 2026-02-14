import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [place, setPlace] = useState([]);

  const AddToCard = (placement) => {
    const newPlace = [...place, placement];

    setPlace(newPlace);
  };

  return (
    <div className="App_jsx_Parent_Design">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent place={place}></PlaceMent>
    </div>
  );
}

export default App;
