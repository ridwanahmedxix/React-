import React from "react";

const SubmitForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="text" />
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
