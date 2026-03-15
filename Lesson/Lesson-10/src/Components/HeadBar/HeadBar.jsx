import React from "react";

const HeadBar = ({ count }) => {
  return (
    <div>
      <button className="bg-yellow-400 text-white my-5 py-3 px-5 rounded-[15px]  ">
        Click Me - {count}
      </button>
    </div>
  );
};

export default HeadBar;
