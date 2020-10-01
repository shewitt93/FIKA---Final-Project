import { isLogin } from "../reducer/authReducer";
import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashBoard from "./DashBoard";
import Chat from "./Chat";
import NotFound404 from "./errorhandlers/NotFound404";
import Game from './Game'
import error500 from "./errorhandlers/error500";
import Settings from "./Settings";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/home" component={DashBoard} />
          <Route path="/home/chat" component={Chat} />
          <Route path="/home/game" component={Game} />
          <Route path="/home/settings" component={Settings} />

          <Route component={NotFound404} />
          <Route component={error500} />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
