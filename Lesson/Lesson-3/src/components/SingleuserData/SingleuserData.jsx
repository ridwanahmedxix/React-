import React from "react";

const SingleuserData = ({ singleData }) => {
  const { id, name, phone, website } = singleData;

  return (
    <div>
      <h1> Your id: {id} </h1>
      <h2> Your name : {name} </h2>
      <h3> Your phone : {phone} </h3>
      <h4> Your website : {website} </h4>
    </div>
  );
};

export default SingleuserData;
