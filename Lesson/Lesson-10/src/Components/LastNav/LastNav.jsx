import React, { useContext } from "react";
import { CountContext } from "../../App";

const LastNav = () => {
  const countState = useContext(CountContext);

  return (
    <div>
      <button className="bg-purple-400 hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  ">
        LastNav - {countState}
      </button>
    </div>
  );
};

export default LastNav;
