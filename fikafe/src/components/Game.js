import React, { Component } from "react";
import Board from "./Board";
import GameChat from "./GameChat";
import { connect } from "react-redux";
import { getUser } from "../Actions/actions";

class Game extends Component {
  render() {
    return (
      <div>
        <div className="game-board">
          <Board />
          {/* <GameChat /> */}
        </div>
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });

export default connect(mSTP, { getUser })(Game);
