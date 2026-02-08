import React from "react";

const SingleuserData = ({ singleData }) => {
  const { id, name, phone, website, company } = singleData;
  return (
    <div>
      <h1> {id} </h1>
      <h1> {name} </h1>
      <h1> {phone} </h1>
      <h1> {website} </h1>
      <h1> {company.name} </h1>
    </div>
  );
};

export default SingleuserData;
