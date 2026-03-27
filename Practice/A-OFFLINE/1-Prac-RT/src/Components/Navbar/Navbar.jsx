import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500  text-white  py-3 px-5 border-b-transparent hover:border-b-red-500 text-center ">
      <Link to={"home"} className="ml-3 text-2xl">
        {" "}
        Home{" "}
      </Link>
      <Link to={"products"} className="ml-3 text-2xl">
        {" "}
        Products{" "}
      </Link>
      <Link to={"contact"} className="ml-3 text-2xl">
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default Navbar;
