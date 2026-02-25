import React from "react";

const Contact = () => {
  return (
    <div className="border-[4px] border-red-500 py-8 ">
      <h1>Contact Section</h1>
      <ul>
        <li className=" border-[2px] border-green-800 py-3 px-4 m-3">
          Location - Gulshan 2{" "}
        </li>
        <li className=" border-[2px] border-green-800 py-3 px-4 m-3">
          {" "}
          Phone - 019xxxxxxxx{" "}
        </li>
        <li className=" border-[2px] border-green-800 py-3 px-4">It Codex R</li>
      </ul>
    </div>
  );
};

export default Contact;
