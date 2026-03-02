import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const moreInfo = useLoaderData();

  const { id, name, email } = moreInfo;

  return (
    <div>
      <p> Id - {id} </p>
      <p> Name - {name} </p>
      <p> Email - {email} </p>
    </div>
  );
};

export default MoreInfo;
