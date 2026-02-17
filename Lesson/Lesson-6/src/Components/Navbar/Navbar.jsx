import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-600 p-[15px] ">
      <a className="bg-purple-500 mx-3 p-[10px] rounded " href="#">
        Home
      </a>
      <a className="bg-purple-500 mx-3 p-[10px] rounded " href="#">
        About
      </a>
      <a className="bg-purple-500 mx-3 p-[10px] rounded " href="#">
        Products
      </a>
      <a className="bg-purple-500 mx-3 p-[10px] rounded  " href="#">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
