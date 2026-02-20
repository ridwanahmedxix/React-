import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-zinc-600 py-4 px-6 text-white text-center">
      <Link className="text-3xl mx-4" to="/home">
        {" "}
        Home{" "}
      </Link>
      <Link className="text-3xl mx-4" to="/products">
        {" "}
        Products{" "}
      </Link>
      <Link className="text-3xl mx-4" to="/contact">
        {" "}
        Contact{" "}
      </Link>
    </div>
  );
};

export default NavBar;
