import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-600 py-5 px-6 text-white mb-7 ">
      <Link className="px-4 text-3xl" to={"home"}>
        {" "}
        Home{" "}
      </Link>
      <Link className="px-4 text-3xl" to={"products"}>
        {" "}
        Products{" "}
      </Link>
      <Link className="px-4 text-3xl" to={"contact"}>
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default Navbar;
