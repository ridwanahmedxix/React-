import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-600 p-[15px] ">
      <Link className="bg-purple-500 mx-3 p-[10px] rounded " to={"/home"}>
        Home
      </Link>
      <Link className="bg-purple-500 mx-3 p-[10px] rounded " to={"about"}>
        About
      </Link>
      <Link className="bg-purple-500 mx-3 p-[10px] rounded " to={"product"}>
        Product
      </Link>
      <Link className="bg-purple-500 mx-3 p-[10px] rounded " to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
