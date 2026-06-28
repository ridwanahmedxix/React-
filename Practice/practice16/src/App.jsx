import React, { useState } from "react";
import Products from "./components/Products/Products";
import PlaceMent from "./components/PlaceMent/PlaceMent";
function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = () => {
    console.log("Hello World");
  };

  return (
    <div className="flex gap-6 ">
      <Products></Products>
      <PlaceMent></PlaceMent>
    </div>
  );
}
export default App;
