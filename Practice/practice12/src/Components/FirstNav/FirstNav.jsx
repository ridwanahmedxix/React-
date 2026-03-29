import React from "react";
import SecondNav from "../SecondNav/SecondNav";

const FirstNav = () => {
  return (
    <div>
      <SecondNav></SecondNav>
      <button className="bg-yellow-400 py-3 px-4  my-4 text-3xl rounded ">
        FirstNav
      </button>
    </div>
  );
};

export default FirstNav;
