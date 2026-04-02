import React, { useRef, useState } from "react";

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
        <input type="email" name="email" />
        <br />
        <br />
        <input type="password" name="password" />
        <br />
        <br />

        <p> </p>
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SubmitForm;
