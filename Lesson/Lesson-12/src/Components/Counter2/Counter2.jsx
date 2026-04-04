import React from "react";

const Counter2 = () => {
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increaseHandle}> Increase </button>
      <br />
      <br />
      <button onClick={decreaseHandle}> Decrease </button>
    </div>
  );
};

export default Counter2;
