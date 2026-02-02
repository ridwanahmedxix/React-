import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <h1> Peoples Name : {props.peopleName[2]} </h1>
      <h2> Peoples Age : {props.peopleAge} </h2>
    </div>
  );
};

export default Home;
