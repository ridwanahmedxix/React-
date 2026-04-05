import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Shopify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 flex flex-col gap-4 transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          onClick={() => setIsOpen(false)}
          className="mobile-link"
          to="/home"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          className="mobile-link"
          to="/products"
        >
          Products
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          className="mobile-link"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
