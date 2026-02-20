import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome To Our Website
        </h1>

        <p className="text-lg mb-8 opacity-90">
          This is a simple React + Tailwind project. You can navigate to
          different pages using React Router.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>

          <Link
            to="/home"
            className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
