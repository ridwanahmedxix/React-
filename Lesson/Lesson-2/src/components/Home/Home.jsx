import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <h1> Product Name : {props.product.name} </h1>
      <h2> Product Price : {props.product.price} </h2>
    </div>
  );
};

export default Home;
