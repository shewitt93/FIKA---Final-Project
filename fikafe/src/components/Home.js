// import { isLogin } from "../reducer/authReducer";
import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Route
          render={() => (
            <TransitionGroup>
              <CSSTransition timeout={300} classNames="fade">
                <Switch>
                  <Route exact path="/home" component={DashBoard} />

                  {/* <Route component={NotFound404} /> */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    );
  }
}

export default App;
