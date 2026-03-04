import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-600 py-2 px-4 rounded-[15px] ">
      <Link className="text-white text-2xl ml-4"> Home </Link>
      <Link className="text-white text-2xl ml-4"> Products </Link>
      <Link className="text-white text-2xl ml-4"> Contact </Link>
    </div>
  );
};

export default Navbar;
