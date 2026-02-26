import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
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
