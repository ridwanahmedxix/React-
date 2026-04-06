import React from "react";

const Contact = () => {
  return (
    <div>
      {/* FIRST DIV */}

      <div>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you.</p>
        <form>
          <label className="block mb-1 font-medium text-gray-700" for="fName">
            First name *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            id="fName"
            placeholder="First name"
            type="text"
          />

          <label className="block mb-1 font-medium text-gray-700" for="lName">
            Last name *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            id="lName"
            placeholder=" Last name"
            type="text"
          />

          <label className="block mb-1 font-medium text-gray-700" for="EmAil">
            Email *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            id="EmAil"
            placeholder=" example@gmail.com "
            type="email"
          />

          <label className="block mb-1 font-medium text-gray-700" for="pNumber">
            Phone number *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            id="pNumber"
            placeholder=" +880 180000000000  "
            type="number"
          />
          <label className="block mb-1 font-medium text-gray-700" for="meSSage">
            Message *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            id="meSSage"
            placeholder="Leave us a message..  "
            type="text"
          />

          <button> Send Message </button>
        </form>
      </div>

      {/* SECOND DIV - IMAGE  */}

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Contact;
