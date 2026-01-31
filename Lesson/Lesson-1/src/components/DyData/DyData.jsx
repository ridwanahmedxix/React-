import React from "react";
import "./DyData.css";

const DyData = (props) => {
  // console.log(props.name);
  return (
    <div id="ExploreDyData">
      <h2>Explore Daynamic Data </h2>
      <h2> Name: {props.name} </h2>
    </div>
  );
};

export default DyData;
