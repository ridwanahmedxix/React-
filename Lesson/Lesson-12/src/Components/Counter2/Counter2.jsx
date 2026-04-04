import React from "react";
import useCounter from "../../Hook/useCounter/useCounter";

const Counter2 = () => {
  const [count, increaseHandle, decreaseHandle] = useCounter();

  return (
    <div>
      <h1> {count} </h1>
      <br />
      <button onClick={increaseHandle}> Increase - </button>
      <button onClick={decreaseHandle}> Decrease - </button>
    </div>
  );
};

export default Counter2;
