import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const moreInfo = useLoaderData();

  return (
    <div>
      <h1>This is MoreInfo</h1>
    </div>
  );
};

export default MoreInfo;
