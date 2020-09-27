import { isLogin } from "../reducer/authReducer";
import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import chat from "./chat";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/home" component={chat} />

          {/* <Route component={NotFound404} /> */}
        </Switch>
      </>
    );
  }
}

export default App;
