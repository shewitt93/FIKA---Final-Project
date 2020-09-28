import { isLogin } from "../reducer/authReducer";
import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashBoard from "./DashBoard";
import Chat from "./Chat";
class App extends React.Component {
  state = {
    initialState: [],
  };
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    fetch("http://localhost:8000/core/current_user", options)
      .then((response) => response.json())
      .then((data) => this.setState({ initialState: data }));
  }
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/home" component={DashBoard} />
          <Route path="/home/chat" component={Chat} />
          {/* <Route component={NotFound404} /> */}
        </Switch>
      </>
    );
  }
}
export default App;
