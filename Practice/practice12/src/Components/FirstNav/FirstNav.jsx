import React from "react";
import SecondNav from "../SecondNav/SecondNav";

const FirstNav = () => {
  return (
    <div>
      <SecondNav></SecondNav>

      <button className="bg-blue-400 py-3 px-4 text-3xl mb-4 rounded ">
        FirstNav
      </button>
    </div>
  );
};

export default FirstNav;
