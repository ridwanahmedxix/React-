import React from "react";
import LastNav from "../LastNav/LastNav";

const HeadBar = ({ count }) => {
  return (
    <div>
      <LastNav></LastNav>
      <button className="bg-yellow-400  hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  ">
        Headbar - {count}
      </button>
    </div>
  );
};

export default HeadBar;
