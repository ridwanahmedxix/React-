import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <h1>
        Home Name : {props.homes.name} & Home Price {props.homes.price} :{" "}
      </h1>
    </div>
  );
};

export default Home;
