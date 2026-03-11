import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [cardInfo, setCardInfo] = useState([]);

  const AddToCard = () => {};

  return (
    <div className="flex ">
      <Products></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}

export default App;
