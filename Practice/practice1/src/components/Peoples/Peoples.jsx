import React from "react";
import "./Peoples.css";

const Peoples = (props) => {
  return (
    <div id="ListParent">
      <h3>Name : {props.name} </h3>
      <h3>Age : {props.age} </h3>
      <h3>Address : {props.address} </h3>
    </div>
  );
};

export default Peoples;
