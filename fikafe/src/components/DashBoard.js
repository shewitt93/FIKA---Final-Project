import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getChat } from "../Actions/actions";
import "../styles/Dashboard.css";

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
        <div className="options">
          <h4>What would you like to do today?</h4>
          <div className="optionsGames">
            <div className="game1">
              <a href="/home/game">
                <h4>TIKTAKTOE</h4>
              </a>
            </div>
            <div className="game2">
              <a href="/home/game">
                <h4>BLACKJACK</h4>
              </a>
            </div>
            <div className="game3">
              <a href="/home/game">
                <h4>CHESS</h4>
              </a>
            </div>
          </div>
        </div>
        <p className="lastLogin">
          last login: {this.props.user.userData.last_login}
        </p>
        <div className="yellowcircle"></div>
        <div className="greencircle"></div>
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getChat })(DashBoard);
