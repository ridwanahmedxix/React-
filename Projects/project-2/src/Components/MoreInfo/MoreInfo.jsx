import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const moreInfo = useLoaderData();

  const { id, title, price, description } = moreInfo;

  return (
    <div>
      <p> Id - {id} </p>
      <p> {title} </p>
      <p> {price} </p>
      <p> {description} </p>
    </div>
  );
};

export default MoreInfo;
