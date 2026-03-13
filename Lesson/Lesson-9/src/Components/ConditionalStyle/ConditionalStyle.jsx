import React, { useState } from "react";

const ConditionalStyle = () => {
  const [isSpecial, setIsSpecial] = useState(false);

  const toggleButton = () => {
    console.log("Clicked");
    setIsSpecial(!isSpecial);
  };

  return (
    <div>
      <button
        onClick={toggleButton}
        className="bg-purple-500 text-white text-2xl py-3 px-5 rounded-[10px] mb-10  hover:bg-purple-600 "
      >
        Make It {isSpecial ? "Normal" : "Special"}
      </button>

      <div
        className={
          isSpecial
            ? "bg-green-300 py-10 px-7 text-2xl rounded-[15px] font-mono  text-white"
            : "text-black text-2xl py-10 px-7  "
        }
      >
        This Is A {isSpecial ? "Special" : "Normal"} Section{" "}
      </div>
    </div>
  );
};
export default ConditionalStyle;
