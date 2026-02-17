import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-600 p-[15px] ">
      <Link to={"/home"}>Home</Link>
      <Link to={"about"}>About</Link>
      <Link to={"product"}>Product</Link>
      <Link to={"/contact"}>Contact</Link>

      {/* className="bg-purple-500 mx-3 p-[10px] rounded " */}
    </div>
  );
};

export default Navbar;
