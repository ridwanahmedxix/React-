import React, { useRef, useState } from "react";

const SubmitForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const [error, setError] = useState("");

  const HandleSubmitForm = (e) => {
    e.preventDefault();

    if (passRef.current.value.lenght < 8) {
      setError("Password must be 8 characters ");
    } else {
      setError("");
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passRef.current.value);
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmitForm}>
        <input ref={nameRef} type="text" name="text" />
        <br />
        <br />
        <input
          ref={emailRef}
          defaultValue={"example@gmail.com"}
          type="email"
          name="email"
        />
        <br />
        <br />
        <input ref={passRef} type="password" name="password" />
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
