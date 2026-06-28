import React, { useState } from "react";
import Products from "./components/Products/Products";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Products></Products>
    </div>
  );
}
export default App;
