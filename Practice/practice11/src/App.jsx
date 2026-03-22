import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Products/Products";

function App() {
  const [singleData, setSingleData] = useState([]);
  const AddToCard = (singleProductRecive) => {
    const newSingleData = [...singleData, singleProductRecive];
    setSingleData(newSingleData);
  };

  return (
    <div>
      <Products AddToCard={AddToCard}></Products>
    </div>
  );
}
export default App;
