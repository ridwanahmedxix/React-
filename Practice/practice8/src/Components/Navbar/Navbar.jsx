import React from "react";
import HeadBar from "../HeadBar/HeadBar";

const Navbar = () => {
  return (
    <div>
      <HeadBar></HeadBar>
      <button className="bg-yellow-400 hover:bg-slate-600 transition my-5 text-white py-3 px-5 text-2xl rounded-[15px]">
        Navbar Button{" "}
      </button>
    </div>
  );
};

export default Navbar;
