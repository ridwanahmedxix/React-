import React from "react";

const SingleuserData = ({ singleData }) => {
  const { id, name, phone, website, company } = singleData;
  return (
    <div className="bg-red-500 ">
      <h3> Id : {id} </h3>
      <h3> Name : {name} </h3>
      <h3> Phone : {phone} </h3>
      <h3> Website : {website} </h3>
      <h3> Company : {company.name} </h3>
    </div>
  );
};

export default SingleuserData;
