import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(22);

  return (
    <div>
      <h1> {count} </h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default UseState;
