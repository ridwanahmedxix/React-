import React from "react";

const UsersData = ({ singleData }) => {
  const { name, age, email } = singleData;

  return (
    <div>
      <h2>Name : {name} </h2>
      <h3> Age : {age} </h3>
      <h4> Email : {email} </h4>
    </div>
  );
};

export default UsersData;
