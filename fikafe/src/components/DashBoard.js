import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getChat } from "../Actions/actions";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getChat();
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <h3>Welcome {this.props.user.userData.username}</h3>
        <h6>last login: {this.props.user.userData.last_login}</h6>
        <h5>What would you like to do today?</h5>
        <br></br>
        <div className="game1">
          <a href="/home/game">TIKTAKTOE</a>
        </div>
        <div className="game2">
          <a href="/home/game">BLACKJACK</a>
        </div>
        <div className="game3">
          <a href="/home/game">CHESS</a>
        </div>
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getChat })(DashBoard);
