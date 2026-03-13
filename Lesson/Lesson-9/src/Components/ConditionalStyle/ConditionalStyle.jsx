import React, { useState } from "react";

const ConditionalStyle = () => {
  const [isSpecial, setIsSpecial] = useState(false);

  const toggleButton = () => {
    console.log("Clicked");
    setIsSpecial(!isSpecial);
  };

  return (
    <div>
      <button className="bg-purple-500 text-white text-2xl py-3 px-5 rounded-[10px]  hover:bg-purple-600 ">
        {" "}
        Make it special{" "}
      </button>
    </div>
  );
};
export default ConditionalStyle;
