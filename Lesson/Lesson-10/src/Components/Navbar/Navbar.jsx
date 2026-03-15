import React from "react";
import HeadBar from "../HeadBar/HeadBar";

const Navbar = ({ count }) => {
  return (
    <div>
      <HeadBar></HeadBar>
      <button className="bg-red-400  hover:bg-gray-500 transition text-white my-5 py-3 px-5 rounded-[15px]  ">
        Navbar - {count}
      </button>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
        consequatur.
      </p> */}
    </div>
  );
};

export default Navbar;
