import React, { useState } from "react";
import "./App.css";
import Product from "./Components/Product/Product";
import Placement from "./Components/Placement/Placement";

const App = () => {
  const [placement, setPlacement] = useState([]);

  const AddToCard = () => {
    console.log("Clicked");
  };

  return (
    <div className="appJsxParent">
      <Product AddToCard={AddToCard}></Product>
      <Placement></Placement>
    </div>
  );
};

export default App;
