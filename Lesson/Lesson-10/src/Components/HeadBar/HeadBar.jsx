import React, { useContext } from "react";
import LastNav from "../LastNav/LastNav";
import { CountContext } from "../../App";

const HeadBar = ({ count }) => {
  const countState = useContext(CountContext);

  return (
    <div>
      <LastNav></LastNav>
      <button className="bg-yellow-400  hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  ">
        Headbar - {countState}
      </button>
    </div>
  );
};

export default HeadBar;
