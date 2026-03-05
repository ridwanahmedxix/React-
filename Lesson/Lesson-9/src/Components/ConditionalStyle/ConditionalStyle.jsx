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
        className="bg-purple-500 py-2 px-4 text-white text-2xl rounded-[10px] mb-4 "
      >
        MAKE IT {isSpecial ? " NORMAL " : " SPECIAL "}
      </button>
      <div className="border-[3px] border-gray-950 p-[15px] m-[10px] bg-stone-400 ">
        This Is A {isSpecial ? "Normal" : "Special"} Style
      </div>
    </div>
  );
};
export default ConditionalStyle;
