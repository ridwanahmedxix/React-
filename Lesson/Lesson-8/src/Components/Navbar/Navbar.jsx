import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-300 px-5 py-4 rounded-[30px] ">
      <Link to={"home"} className="ml-3 text-3xl">
        {" "}
        Home{" "}
      </Link>
      <Link to={""} className="ml-3 text-3xl">
        {" "}
        About{" "}
      </Link>
      <Link to={""} className="ml-3 text-3xl">
        {" "}
        Products{" "}
      </Link>
      <Link to={""} className="ml-3 text-3xl">
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default Navbar;
