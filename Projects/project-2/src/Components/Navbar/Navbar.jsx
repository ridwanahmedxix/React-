import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-600 py-2 px-4 rounded-[15px] mb-10 ">
      <Link to={"home"} className="text-white text-2xl ml-4">
        {" "}
        Home{" "}
      </Link>
      <Link to={"product"} className="text-white text-2xl ml-4">
        {" "}
        Products{" "}
      </Link>
      <Link to={"contact"} className="text-white text-2xl ml-4">
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default Navbar;
