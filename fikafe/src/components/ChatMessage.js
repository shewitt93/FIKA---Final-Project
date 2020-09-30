import React from "react";
export default ({ name, message, time }) => (
  <p className="otherusers">
    <strong>{name}</strong> : {message}
    <br></br>
    {time}
  </p>
);
