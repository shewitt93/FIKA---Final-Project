import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/FormsLayout.css";
import "../styles/Registration.css";

export default class SignupForm extends Component {
  state = { username: "", email: "", password: "", passwordTwo: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    let userData;
    e.preventDefault();
    if (this.state.password === this.state.passwordTwo) {
      userData = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      };
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:8000/core/users/", options)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          if (data.username[0] == "A user with that username already exists.") {
            alert("A user with that username already exists!");
          } else {
            if (window.confirm("click ok to login!")) {
              window.location.href = "/";
            }
          }
        });
    } else {
      alert("Passwords do not match");
    }
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="greencircleRegistration"></div>
          <div className="pinkcircle"></div>
          <h1 className="loginTitle">FIKA</h1>
          <div className="registrationForm">
            <h3>Register</h3>
            <form onSubmit={this.handleFormSubmit}>
              <input
                className="formInput"
                required
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput}
                maxLength="20"
              />
              <br />
              <input
                className="formInput"
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleInput}
              />
              <br />
              <input
                className="formInput"
                required
                type="password"
                name="password"
                minLength="6"
                placeholder="Password Minimum of 6 characters"
                value={this.state.password}
                onChange={this.handleInput}
              />
              <br />
              <input
                className="formInput"
                required
                type="password"
                name="passwordTwo"
                minLength="6"
                placeholder="Re-enter Password"
                value={this.state.passwordTwo}
                onChange={this.handleInput}
              />
              <br />
              <input
                className="registerButton"
                type="submit"
                value="Create Account"
              />
            </form>
            <div className="callToActionRegistration">
              <h4>Already have an account?</h4>
              <br />
              <Link to="/">
                Click <span className="clickHere">here</span> to Login
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
