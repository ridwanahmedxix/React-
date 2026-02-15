import React from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import PlaceMent from "./Components/PlaceMent/PlaceMent";

function App() {
  const AddToCardData = () => {
    console.log("Clicked");
  };

  return (
    <div className="APP_JSX">
      <Products AddToCardData={AddToCardData}></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}

export default App;
