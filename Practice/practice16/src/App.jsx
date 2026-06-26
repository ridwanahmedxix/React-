import React, { useState } from "react";
import Products from "./components/Products/Products";
import PlaceMent from "./components/PlaceMent/PlaceMent";

function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = () => {
    console.log("Hello");
  };

  return (
    <div className="flex gap-6">
      <Products AddToCart={AddToCart}></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}
export default App;
