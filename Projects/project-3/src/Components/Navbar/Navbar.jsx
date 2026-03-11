import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 py-5 px-7 text-2xl text-white rounded-[20px]">
      <Link to={"home"} className="mx-5 ">
        {" "}
        Home{" "}
      </Link>
      <Link to={"products"} className="mx-5 ">
        {" "}
        Products{" "}
      </Link>
      <Link to={"contact"} className="mx-5 ">
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default Navbar;
