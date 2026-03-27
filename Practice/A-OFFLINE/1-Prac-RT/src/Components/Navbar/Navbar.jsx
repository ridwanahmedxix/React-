import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500  text-white  py-3 px-5 border-b-transparent hover:border-b-red-500 text-center ">
      <Link className="ml-3 text-2xl"> Home </Link>
      <Link className="ml-3 text-2xl"> Products </Link>
      <Link className="ml-3 text-2xl"> Contact </Link>
    </div>
  );
};

export default Navbar;
