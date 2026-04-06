import React from "react";
import "./App.css";
import Products from "./components/Products/Products";
import PlaceMent from "./components/PlaceMent/PlaceMent";

function App() {
  return (
    <div className="flex justify-between">
      <Products></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}

export default App;
