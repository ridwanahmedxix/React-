import React, { useRef } from "react";

const SubmitForm = () => {
  const nameRef = useRef("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input ref={nameRef} type="text" name="text" />
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
