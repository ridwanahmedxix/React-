import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState(10);

  const increaseButton = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };

  useEffect(() => {
    alert("This is a First Alert ");
  }, []);

  useEffect(() => {
    alert("Click To Alert Show - useEffect");
  }, [price]);

  return (
    <div>
      <h1> Count : {price} </h1>
      <button onClick={increaseButton}>Increase</button>
    </div>
  );
}

export default App;
