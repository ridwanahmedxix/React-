import React from "react";
import LastBar from "../LastBar/LastBar";

const HeadBar = () => {
  return (
    <div>
      <LastBar></LastBar>
      <button className="bg-purple-500 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]">
        HeadBar Button
      </button>
    </div>
  );
};

export default HeadBar;
