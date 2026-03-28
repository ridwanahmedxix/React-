import React, { useContext } from "react";
import ThirdNav from "../ThirdNav/ThirdNav";
import { CountContext } from "../../App";

const SecondNav = () => {
  const countState = useContext(CountContext);

  return (
    <div>
      <ThirdNav></ThirdNav>
      <button className="bg-red-400 py-3 px-4 text-3xl my-3 rounded ">
        SecondNav - {countState}
      </button>
    </div>
  );
};

export default SecondNav;
