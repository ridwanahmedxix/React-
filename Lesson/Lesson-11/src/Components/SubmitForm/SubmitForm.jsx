import React from "react";

const SubmitForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submited", e);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name="" />
        <br />
        <br />
        <input type="email" name="" />
        <br />
        <br />
        <input type="password" name="" id="" />
        <br />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SubmitForm;
