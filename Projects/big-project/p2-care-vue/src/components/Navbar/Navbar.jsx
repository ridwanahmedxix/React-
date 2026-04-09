import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div>{/* <IoSettingsSharp /> */}</div>
          <div>
            <h2>CareVue</h2>
          </div>
        </div>
        <div>
          <div>
            <p> Features </p>
            <p> Learn </p>
            <p> Blog </p>
          </div>

          <div>
            <button> Book a Demo </button>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, impedit!
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
