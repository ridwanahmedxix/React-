import React from "react";

const Contact = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "purple",
          padding: "10px",
          fontSize: "28px",
          color: "white",
        }}
      >
        Welcome To The Contact Page
      </h1>

      <p style={{ marginTop: "10px" }}>
        If you have any questions, feel free to contact us.
      </p>

      <form style={{ marginTop: "20px", width: "250px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Your Email"
            style={{ width: "100%", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            placeholder="Your Message"
            style={{ width: "100%", padding: "5px" }}
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
