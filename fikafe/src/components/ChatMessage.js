import React from "react";
export default ({ name, message, time }) => (
  <p>
    <strong>{name}</strong> : {message}
 
  <br></br>
  {time}
  </p>
);
