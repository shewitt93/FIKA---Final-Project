import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

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
        window.location = "/home";
      })

      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="wrapper">
        <div className="yellowcircle"></div>
        <div className="greencircle"></div>
        <h1 className="loginTitle">FIKA</h1>
        <div className="loginPageContainer">
          <h3>Login</h3>
          <div className="loginFormContainer">
            <form
              autoComplete="disabled"
              autoFill="something-new"
              onSubmit={this.handleFormSubmit}
            >
              <input
                required
                autoComplete="disabled"
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
              <span className="submitForm">
                <input type="submit" value="Login" className="loginButton" />
                <div className="callToAction">
                  <Link to="/register">
                    <button className="loginButton">
                      <a href="/register">Register</a>
                    </button>
                  </Link>
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
