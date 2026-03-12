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
        className="bg-purple-600 text-white py-2 px-4 text-2xl rounded hover:bg-purple-700"
      >
        {isSpecial ? " Make It Normal " : " Make It Special "}
      </button>
      <div>This is a Normal Section</div>
    </div>
  );
};

export default ConditionalStyle;
