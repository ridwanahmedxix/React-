import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <Link> IT CODEX </Link>
        </div>
        <div>
          <Link> Home </Link>
          <Link> Products </Link>
          <Link> Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
