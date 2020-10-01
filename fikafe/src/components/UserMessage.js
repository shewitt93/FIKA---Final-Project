import React from "react";
export default ({ name, message, time }) => (
  <div className="usermessage">
    <p>
      <strong>{name}</strong>
    </p>{" "}
    <p>{message}</p>
    <p className="time">{time}</p>
  </div>
);
