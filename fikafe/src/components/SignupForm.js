import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../styles/newUser.css";

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

      fetch("http://localhost:8000/core/users/", options).then((r) => r.json());

      console.log("CONNECT TO DB");
    } else {
      alert("Passwords do not match");
    }
  };

  render() {
    return (
      <>
        <div className="registrastionPageContainer">
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
          <div className="callToAction">
            <h2>Already have an account?</h2>
            <br />
            <Link to="/">
              Click <span className="clickHere">here</span> to Login
            </Link>
          </div>
        </div>
      </>
    );
  }
}
