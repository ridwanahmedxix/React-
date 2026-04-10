import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>
            <IoSettingsSharp />
            <h2> Care Vue </h2>
          </div>
        </div>
        <div>
          <p> Features</p>
          <p>Learn</p>
          <p>Blog</p>
        </div>
        <div>
          <button>Book a Demo</button>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
