import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <h1>Products Name : {props.products.name} </h1>
      <h2> Products Price : </h2>
    </div>
  );
};

export default Home;
