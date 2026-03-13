import React, { useState } from "react";

const ConditionalStyle = () => {
  const [isSpecial, setIsSpecial] = useState(false);

  const toggleButton = () => {
    console.log("Clicked");
    setIsSpecial(!isSpecial);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button> Make it special </button>
    </div>
  );
};
export default ConditionalStyle;
