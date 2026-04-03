import React, { useRef, useState } from "react";

const SubmitForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input ref={nameRef} type="text" name="text" />
        <br />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <br />
        <input ref={passRef} type="password" name="password" />
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
