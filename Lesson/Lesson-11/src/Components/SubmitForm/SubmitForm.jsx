import React, { useState } from "react";

const SubmitForm = () => {
  const [name, setName] = useState("");

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={HandleSubmitForm}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="text"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="email"
          name="email"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="password"
          name="password"
        />
        <br />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SubmitForm;
