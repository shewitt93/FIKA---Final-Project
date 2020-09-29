import React, { Component } from 'react'
import Square from './Square'
import "../styles/tiktactoe.css";

const URL = "ws://localhost:3040";

class Board extends Component {

    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };

    ws = new WebSocket(URL);

    addMessage = () =>
    this.setState((state) => ({ squares: [...state.squares] }));

    calculateWinner=(squares)=> {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }

    handleClick = (i) => {
        const squares = this.state.squares.slice();
        
        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
    
        const data = this.state.squares
    
    
        this.ws.send(JSON.stringify(data));
        this.addMessage(data);
    }

    componentDidMount(){
        this.ws.onopen = () => {
        // on connecting, log it to the console
            console.log("A user has connected");
        };
  

    }

    renderSquare = (i) => {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      };

    render() {

        this.ws.onmessage = (evt) => {
            // on receiving a message, add it to the list of messages
      
                const squares = JSON.parse(evt.data);
                this.addMessage(squares);
      
                console.log(JSON.parse(evt.data))
            }

        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
    // console.log(this.state.squares);
    // console.log(this.state.xIsNext);
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>    
            </div>
        )
    }
}

export default Board

