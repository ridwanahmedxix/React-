import React, { useState } from "react";
import Products from "./components/Products/Products";

function App() {
  const [cart, setCart] = useState([]);

  const AddToCart = () => {};

  return (
    <div>
      <Products></Products>
    </div>
  );
}
export default App;
