import React, { useContext } from "react";
import { CountContext } from "../../App";

const LastBar = () => {
  const countState = useContext(CountContext);

  return (
    <div>
      <button className="bg-green-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]">
        Lastbar - {countState}
      </button>
    </div>
  );
};

export default LastBar;
