import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={SignupForm} />
          <PrivateRoute path="/home" component={Home} />

          {/* <Route component={NotFound404} /> */}
        </Switch>
      </>
    );
  }
}
export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: "",
//       logged_in: localStorage.getItem("token") ? true : false,
//       username: "",
//     };
//   }

//   componentDidMount() {
//     if (this.state.logged_in) {
//       fetch("http://localhost:8000/core/current_user/", {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem("token")}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((json) => {
//           this.setState({ username: json.username });
//         });
//     }
//   }

//   handle_login = (e, data) => {
//     e.preventDefault();
//     fetch("http://localhost:8000/token-auth/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         localStorage.setItem("token", json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: "",
//           username: json.user.username,
//         });
//       });
//   };

//   handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch("http://localhost:8000/core/users/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         localStorage.setItem("token", json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: "",
//           username: json.username,
//         });
//       });
//   };

//   handle_logout = () => {
//     localStorage.removeItem("token");
//     this.setState({ logged_in: false, username: "" });
//   };

//   display_form = (form) => {
//     this.setState({
//       displayed_form: form,
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case "login":
//         form = <LoginForm handle_login={this.handle_login} />;
//         break;
//       case "signup":
//         form = <SignupForm handle_signup={this.handle_signup} />;
//         break;
//       default:
//         form = null;
//     }

//     return (
//       <div className="App">
//         <Nav
//           logged_in={this.state.logged_in}
//           display_form={this.display_form}
//           handle_logout={this.handle_logout}
//         />
//         {form}
//         <h3>
//           {this.state.logged_in
//             ? `Hello, ${this.state.username}`
//             : "Please Log In"}
//         </h3>
//       </div>
//     );
//   }
// }

// export default App;
