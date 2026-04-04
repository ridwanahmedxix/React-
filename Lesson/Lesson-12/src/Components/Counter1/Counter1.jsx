import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increaseHandle = () => {
    setCount(count + 1);
  };
  const decreaseHandle = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increaseHandle}> Increase </button>
      <br />
      <br />
      <button onClick={decreaseHandle}> Decrease </button>
    </div>
  );
};

export default Counter1;
