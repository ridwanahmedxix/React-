import React, { useRef, useState } from "react";

const SubmitForm = () => {
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
