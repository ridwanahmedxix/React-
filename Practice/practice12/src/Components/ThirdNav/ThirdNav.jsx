import React, { useContext } from "react";
import { CountContext } from "../../App";

const ThirdNav = () => {
  const [count, setCount] = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-yellow-400 py-3 px-4 text-3xl rounded "
      >
        ThirdNav - {count}
      </button>
    </div>
  );
};

export default ThirdNav;
