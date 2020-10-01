import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";

import "../styles/LoginForm.css";

export default class Settings extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
            <form autoComplete="disabled" onSubmit={this.handleFormSubmit}>
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
                  <button className="loginButton">
                    <a href="/register">Register</a>
                  </button>
                </div>
              </span>
            </form>
          </div>
        </div>
        //{" "}
      </div>
    );
  }
}
