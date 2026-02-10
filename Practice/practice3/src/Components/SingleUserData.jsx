import React from "react";

const SingleUserData = ({ singleData }) => {
  const { id, name, phone, website, company } = singleData;

  return (
    <div>
      <h1> Id : {id} </h1>
      <h1> Name : {name} </h1>
      <h1> Phone : {phone} </h1>
      <h1> Website : {website} </h1>
      <h1> Company : {company.name} </h1>
    </div>
  );
};

export default SingleUserData;
