import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increaseHandle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increaseHandle}>Increase</button>
      <button>Decrease</button>
    </div>
  );
};

export default Counter1;
