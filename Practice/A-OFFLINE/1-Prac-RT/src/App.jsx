import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";

function App() {
  const [card, setCard] = useState([]);

  const AddToCard = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Products AddToCard={AddToCard}></Products>
    </div>
  );
}
export default App;
