import React from "react";
import "./Home.css";

const Home = (props) => {
  const cfAlert = document.getElementById("cfAlert");
  cfAlert.addEventListener("click", () => {
    alert(" This is a Alert");
  });

  return (
    <div>
      <h1> Product Name : {props.product.name} </h1>
      <h2> Product Price : {props.product.price} </h2>
      <button id="cfAlert">Click For Alert</button>
    </div>
  );
};

export default Home;
