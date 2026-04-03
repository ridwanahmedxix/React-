import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" />
        <Route path="/auth" />
        <Route path="/checkout" />
      </Routes>
    </div>
  );
}

export default App;
