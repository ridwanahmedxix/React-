import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <IoSettingsSharp className="text-3xl text-blue-500" />
          <h2 className="text-lg font-bold ml-2">CareVue</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <p className="cursor-pointer hover:text-blue-400">Features</p>
          <p className="cursor-pointer hover:text-blue-400">Learn</p>
          <p className="cursor-pointer hover:text-blue-400">Blog</p>

          <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg transition">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
          <p className="hover:text-blue-400 cursor-pointer">Features</p>
          <p className="hover:text-blue-400 cursor-pointer">Learn</p>
          <p className="hover:text-blue-400 cursor-pointer">Blog</p>

          <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg transition w-fit">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
