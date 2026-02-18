import React from "react";
import "./App.css";
import Products from "./Components/Products/Products";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
