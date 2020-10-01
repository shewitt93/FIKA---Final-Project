import React, { Component, useEffect } from "react";
import { getUser, getChat } from "../Actions/actions";
import { connect } from "react-redux";
// import Chat from "./Chat";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {" "}
        <h3 className="logo">bits and bobs</h3>
        {/* <div Component={Chat} /> */}
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getChat })(Footer);
