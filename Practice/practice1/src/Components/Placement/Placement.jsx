import React from "react";
import "./Placement.css";

const Placement = ({ place }) => {
  console.log(place);
  return (
    <div>
      <h1>This is a Placement Sec</h1>

      {place.map(SingleCard)}
    </div>
  );
};

export default Placement;
