import React, { Component } from "react";
import Chat from './Chat';
import { getUser, getChat } from "../Actions/actions";
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
// import "../styles/NavBar.css";
// import { logout } from "../reducer/authReducer";

 class Footer extends Component {
  componentDidMount() {
     this.props.getChat()
   }
  render() {
    return (
      
      <div className="navContainer">
        {" "}
        <h1 className="logo">hello there</h1>
        <Chat />
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getChat })(Footer);
