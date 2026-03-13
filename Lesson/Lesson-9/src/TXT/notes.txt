import React, { useState } from "react";

const ConditionalStyle = () => {
  const [isSpecial, setIsSpecial] = useState(false);

  const toggleButton = () => {
    setIsSpecial(!isSpecial);
  };

  return (
    <div>
      <button
        onClick={toggleButton}
        className="bg-purple-600 text-white py-2 px-4 text-2xl my-5 rounded hover:bg-purple-700"
      >
        Make It {isSpecial ? " Normal " : " Special "}
      </button>
      <div
        className={
          isSpecial
            ? "bg-green-500 rounded-[10PX] text-2xl text-white p-4"
            : "bg-red-500"
        }
      >
        This is a {isSpecial ? "Special" : "Normal"} Section
      </div>
    </div>
  );
};

export default ConditionalStyle;
