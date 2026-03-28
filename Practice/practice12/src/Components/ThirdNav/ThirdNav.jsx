import React, { useContext } from "react";
import { CountContext } from "../../App";

const ThirdNav = () => {
  const countState = useContext(CountContext);

  return (
    <div>
      <button className="bg-yellow-400 py-3 px-4 text-3xl rounded ">
        ThirdNav - {countState}
      </button>
    </div>
  );
};

export default ThirdNav;
