import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/home"> Home </Link>
      <Link to="/products"> Products </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};

export default NavBar;
