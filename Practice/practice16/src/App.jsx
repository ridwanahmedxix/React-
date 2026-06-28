import React, { useState } from "react";
import Products from "./components/Products/Products";
import PlaceMent from "./components/PlaceMent/PlaceMent";
function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = (singleProductRecive) => {
    const newCart = [...cart, singleProductRecive];
    setCart(newCart);
  };

  return (
    <div className="flex gap-6 ">
      <Products AddToCart={AddToCart}> </Products>
      <PlaceMent cart={cart}></PlaceMent>
    </div>
  );
}
export default App;
