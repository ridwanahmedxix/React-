import React from "react";

const Maths = () => {
  function adding(num) {
    console.log(num * 2);
  }

  return (
    <div>
      <button onClick={() => adding(2)} id="clickBtn">
        Click
      </button>
    </div>
  );
};

export default Maths;
