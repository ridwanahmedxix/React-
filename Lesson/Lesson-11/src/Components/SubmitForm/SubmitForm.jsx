import React, { useRef, useState } from "react";

const SubmitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const HandleSubmitForm = (e) => {
    e.preventDefault();

    if (pass.length < 6) {
      setError("Password must be 6 character ");
    } else {
      setError("");

      console.log(name);
      console.log(email);
      console.log(pass);
    }
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
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          name="password"
        />
        <br />
        <br />

        <p> {error} </p>
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SubmitForm;
