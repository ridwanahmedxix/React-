import { useState } from "react";
import "./App.css";
import Peoples from "./components/Peoples/Peoples";

function App() {
  return (
    <>
      <Peoples name="Abul" age="18" address="Dhaka"></Peoples>
      <Peoples name="Kbul" age="19" address="Gulshan"></Peoples>
      <Peoples name="Bbul" age="16" address="Mirpur"></Peoples>
      <Peoples name="Jbul" age="17" address="Badda"></Peoples>
    </>
  );
}

export default App;
