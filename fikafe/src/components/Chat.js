import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { getUser, getChat } from "../Actions/actions";
import { connect } from "react-redux";
const URL = "ws://localhost:3030";
class Chat extends Component {
  state = {
    username: this.props.user.userData.username,
    message: this.props.user.message,
  };
  ws = new WebSocket(URL);
  componentDidMount() {
    this.props.getUser();
    this.props.getChat();
    this.ws.onopen = () => {
      // on connecting, log it to the console
      console.log("A user has connected");
    };
    this.ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };
    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      });
    };
  }
  addMessage = (message) =>
    this.setState((state) => ({ message: [message, ...state.message] }));
  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = {
      username: this.props.user.userData.username,
      message: messageString,
    };
    console.log(message);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(message),
    };
    console.log(options);
    fetch("http://localhost:8000/core/message/", options).then((r) => r.json());
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };
  render() {
    console.log(this.props.user.message);
    return (
      <div>
        <label htmlFor="name">
          Logged in as: {this.props.user.userData.username}
        </label>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={(messageString) => this.submitMessage(messageString)}
        />
        {this.state.message.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.username}
          />
        ))}
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getChat })(Chat);
// export default Chat;
