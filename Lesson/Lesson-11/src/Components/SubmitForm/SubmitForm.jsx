import React from "react";

const SubmitForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name="text" />
        <br />
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SubmitForm;
