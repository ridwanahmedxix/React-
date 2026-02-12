import React from "react";
import "./UserData.css";

const UserData = ({ singleData, AddToCard }) => {
  const { id, name, phone, address } = singleData;

  return (
    <div className="UserCard">
      <h3> id : {id} </h3>
      <h3> id : {name} </h3>
      <h3> id : {phone} </h3>
      <h3> id : {address} </h3>
      <button onClick={AddToCard} className="addToCard">
        Add To Card{" "}
      </button>
    </div>
  );
};

export default UserData;
