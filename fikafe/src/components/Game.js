import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
    render() {
        return (
            <div>
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game

