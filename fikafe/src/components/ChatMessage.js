import React from "react";
export default ({ name, message, time }) => (
  <div className="otherusers">
    <p>
      <strong>{name}</strong>
    </p>
    <p>{message}</p>
    <p className="time">{time}</p>
  </div>
);
