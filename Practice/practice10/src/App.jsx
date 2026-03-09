import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const [card, setCard] = useState([]);

  return (
    <div>
      <Products></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}
export default App;
