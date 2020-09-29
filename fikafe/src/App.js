import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import NotFound404 from "./components/errorhandlers/NotFound404";
import error500 from "./components/errorhandlers/error500";

// import "./App.css";

// if state = token then go to home

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={SignupForm} />
          <PrivateRoute path="/home" component={Home} />

          <Route component={NotFound404} />
          <Route component={error500} />
        </Switch>
      </>
    );
  }
}
export default App;
