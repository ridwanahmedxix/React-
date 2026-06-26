import React, { useState } from "react";
import Products from "./components/Products/Products";
import PlaceMent from "./components/PlaceMent/PlaceMent";
function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = (singleProduct) => {
    const newCart = [...cart, singleProduct];
    setCart(newCart);
  };

  return (
    <div className="flex gap-7">
      <Products AddToCart={AddToCart}></Products>
      <PlaceMent cart={cart}></PlaceMent>
    </div>
  );
}

export default App;
