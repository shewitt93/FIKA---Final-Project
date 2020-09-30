import React from "react";
export default ({ name, message, time }) => (
  <p className="usermessage">
    <p>
      <strong>{name}</strong>
    </p>{" "}
    {message}
    <br></br>
    <p className="time">{time}</p>
  </p>
);
