import React from "react";
import HeadBar from "../HeadBar/HeadBar";

const Navbar = ({ count }) => {
  return (
    <div>
      <HeadBar></HeadBar>
      <button className="bg-red-400 text-white my-5 py-3 px-5 rounded-[15px]  ">
        Navbar - {count}
      </button>
    </div>
  );
};

export default Navbar;
