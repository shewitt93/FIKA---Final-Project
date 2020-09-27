import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ Password: "" });

    let LogIn = {
      username: this.state.username,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(LogIn),
    };
    console.log(options);

    fetch("http://localhost:8000/token-auth/", options)
      .then((r) => r.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <div className="loginPageContainer">
          <div className="loginFormContainer">
            <form onSubmit={this.handleFormSubmit}>
              <input
                required
                className="formInput"
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleInput}
              />
              <br />
              <input
                required
                className="formInput"
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
              <br />
              <input type="submit" value="Login" className="loginButton" />
            </form>
            <div className="callToAction">
              <h2>Not Registered yet?</h2>
              <br />
              <Link to="/register">
                Click <span className="clickHere">here</span> to create an
                account
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
