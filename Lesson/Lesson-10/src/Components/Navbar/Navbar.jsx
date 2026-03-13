import React from "react";
import HeadBar from "../HeadBar/HeadBar";

const Navbar = ({ count }) => {
  return (
    <div>
      <HeadBar count={count}></HeadBar>
      <button> Click Me - {count} </button>
    </div>
  );
};

export default Navbar;
