import { useState } from "react";
import "./App.css";

function App() {
  let [price, setPrice] = useState(10);

  const increaseHandle = () => {
    const NewPrice = price + 1;
    setPrice(NewPrice);
  };

  const decreaseHandle = () => {
    setPrice(price - 1);
  };

  return (
    <div>
      <h1> Price: {price} </h1>
      <button onClick={increaseHandle}>Increase</button>
      <button onClick={decreaseHandle}>Decrease</button>
    </div>
  );
}

export default App;
