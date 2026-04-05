import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-950 text-white  flex items-center justify-between px-7 py-6  ">
        <div>
          <Link to={"/"} className="text-3xl">
            {" "}
            IT CODEX{" "}
          </Link>
        </div>
        <div>
          <Link
            to={"home"}
            className="text-2xl p-4 bg-transparent hover:bg-blue-400 rounded-[15px] transition-[0.9s] "
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to={"products"}
            className="text-2xl p-4 bg-transparent hover:bg-blue-400 rounded-[15px] transition-[0.9s] "
          >
            {" "}
            Products{" "}
          </Link>
          <Link
            to={"contact"}
            className="text-2xl p-3 bg-transparent hover:bg-blue-400 rounded-[15px] transition-[0.9s] "
          >
            {" "}
            Contact{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
