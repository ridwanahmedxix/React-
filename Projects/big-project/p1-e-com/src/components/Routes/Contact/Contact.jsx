import React from "react";

const Contact = () => {
  return (
    <div className=" px-10 max-w-[800px] w-[100%] mx-auto  py-10  block sm:flex justify-center mt-8 mb-11 ">
      {/* FIRST DIV */}

      <div className="pr-10">
        <h2 className="font-medium text-3xl pb-4">Get in touch</h2>
        <p className="text-gray-500 text-[16px] pb-6 ">
          Our friendly team would love to hear from you.
        </p>
        <form>
          <label className="block mb-2 font-medium text-gray-700" for="fName">
            First name *
          </label>
          <input
            required
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mb-3 "
            id="fName"
            placeholder="First name"
            type="text"
          />

          <label className="block mb-2 font-medium text-gray-700" for="lName">
            Last name *
          </label>
          <input
            required
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mb-3 "
            id="lName"
            placeholder=" Last name"
            type="text"
          />

          <label className="block mb-2 font-medium text-gray-700" for="EmAil">
            Email *
          </label>
          <input
            required
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mb-3 "
            id="EmAil"
            placeholder=" example@gmail.com "
            type="email"
          />

          <label className="block mb-2 font-medium text-gray-700" for="pNumber">
            Phone number *
          </label>
          <input
            required
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mb-3 "
            id="pNumber"
            placeholder=" +880 180000000000  "
            type="number"
          />
          <label className="block mb-2 font-medium text-gray-700" for="meSSage">
            Message *
          </label>
          <input
            className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mb-3 "
            id="meSSage"
            placeholder="Leave us a message..  "
            type="text"
          />

          <button className="block mt-2 mb-5 bg-purple-600 hover:bg-purple-700 py-2 px-4 max-w-[250px] w-[100%] text-white ">
            Send Message
          </button>
        </form>
      </div>

      {/* SECOND DIV - IMAGE  */}

      <div className="">
        <img
          className=" max-w-[270px] w-[100%]  sm:max-w-[400px] sm:w-[100%]"
          src="/public/photo/contactSec.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
