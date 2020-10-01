import React from "react";
import { withRouter } from "react-router-dom";

const NotFound404 = (props) => {
  return (
    <div>
      <h2>Oops! This Page doesn't exist!</h2>
      <button onClick={props.history.goBack}>Back to saftey</button>
      <section>
        <p>We don't have a page called {props.location.pathname}!</p>
      </section>
    </div>
  );
};
export default withRouter(NotFound404);
