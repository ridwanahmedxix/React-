import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-600 py-5 px-6 text-white">
      <Link to={"home"}> Home </Link>
      <Link to={"products"}> Products </Link>
      <Link to={"contact"}> Contact </Link>
    </div>
  );
};

export default Navbar;
