import React, { useContext } from "react";
import SecondNav from "../SecondNav/SecondNav";
import { CountContext } from "../../App";

const FirstNav = () => {
  const countState = useContext(CountContext);

  return (
    <div>
      <SecondNav></SecondNav>
      <button className="bg-green-400 py-3 px-4 text-3xl my-3 rounded ">
        FirstNav - {countState}
      </button>
    </div>
  );
};

export default FirstNav;
