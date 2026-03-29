import React, { useContext } from "react";
import ThirdNav from "../ThirdNav/ThirdNav";
import { AnotherContext } from "../../App";

const SecondNav = () => {
  const [another, setAnother] = useContext(AnotherContext);

  return (
    <div>
      <ThirdNav></ThirdNav>
      <button
        onClick={() => setAnother(another + 1)}
        className="bg-red-400 py-3 px-4 text-3xl my-3 rounded "
      >
        SecondNav - {another}
      </button>
    </div>
  );
};

export default SecondNav;
