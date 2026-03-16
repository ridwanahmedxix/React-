import React, { useContext } from "react";
import { ContextCount } from "../../App";

const LastBar = () => {
  const countState = useContext(ContextCount);

  return (
    <div>
      <button className="bg-purple-500 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]">
        LastBar - {countState}
      </button>
    </div>
  );
};

export default LastBar;
