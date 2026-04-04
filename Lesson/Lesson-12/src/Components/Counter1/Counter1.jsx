import React, { useState } from "react";

const Counter1 = () => {
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

export default Counter1;
