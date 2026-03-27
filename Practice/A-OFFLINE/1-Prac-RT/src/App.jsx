import React from "react";
import "./App.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
