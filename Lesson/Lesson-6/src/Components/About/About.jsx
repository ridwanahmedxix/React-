import React from "react";

const About = () => {
  const team = [
    { id: 1, name: "Ahmed", role: "Frontend Developer" },
    { id: 2, name: "Rahim", role: "Backend Developer" },
  ];

  return (
    <div>
      <h1
        style={{
          backgroundColor: "green",
          padding: "10px",
          fontSize: "28px",
          color: "white",
        }}
      >
        Welcome To The About Page
      </h1>

      <p style={{ marginTop: "10px" }}>
        We are a small development team building simple web applications.
      </p>

      <h3 style={{ marginTop: "20px" }}>Our Team</h3>

      {team.map((member) => (
        <div
          key={member.id}
          style={{
            border: "1px solid gray",
            padding: "8px",
            marginTop: "8px",
            width: "200px",
          }}
        >
          <p>Name: {member.name}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
