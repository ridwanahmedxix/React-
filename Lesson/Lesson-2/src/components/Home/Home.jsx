import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <h1> Product Name : {props.product.name} </h1>
      <h2> Product Price : {props.product.price} </h2>
      <button onClick={props.clickAlert}>Click For Alert</button>
    </div>
  );
};

export default Home;
