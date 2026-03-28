import React from "react";
import SecondNav from "../SecondNav/SecondNav";

const FirstNav = () => {
  return (
    <div>
      <SecondNav></SecondNav>
      <button className="bg-green-400 py-3 px-4 text-3xl my-3 rounded ">
        FirstNav
      </button>
    </div>
  );
};

export default FirstNav;
