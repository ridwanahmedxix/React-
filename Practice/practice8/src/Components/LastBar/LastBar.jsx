import React, { useContext } from "react";
import { CountContext } from "../../App";

const LastBar = () => {
  const CountState = useContext(CountContext);

  return (
    <div>
      <button className="bg-blue-500 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]">
        LastBar Button - {CountState}
      </button>
    </div>
  );
};

export default LastBar;
