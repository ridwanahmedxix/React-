import { useState } from "react";
import "./App.css";

function App() {
  let [price, setPrice] = useState(10);

  const increaseHandelar = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  return (
    <div>
      <h1>Price : {price} </h1>
      <button onClick={increaseHandelar}>Increase</button>
    </div>
  );
}

export default App;
