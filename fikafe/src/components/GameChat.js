import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import UserMessage from "./UserMessage";
import { getUser } from "../Actions/actions";
import { connect } from "react-redux";
import "../styles/Userchat.css";
import "../styles/modal.css";
const URL = "ws://localhost:3041";

class GameChat extends Component {
  state = {
    message: [],
  };
  ws = new WebSocket(URL);
  componentDidMount() {
    this.props.getUser();
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
  // componentDidUpdate(prevProps, PrevState) {
  //   if (PrevState.message !== this.state.message) {
  //     // this.setState({ message: this.props.getChat() });
  //     this.props.getChat();
  //   }
  // }

  addMessage = (data) =>
    this.setState((state) => ({ message: [...state.message, data] }));

  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = {
      username: this.props.user.userData.username,
      message: messageString,
    };
    // console.log(message);
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     Authorization: `JWT ${localStorage.getItem("token")}`,
    //   },
    //   body: JSON.stringify(message),
    // };
    // console.log(options);
    // fetch("http://localhost:8000/core/message/", options).then((r) => r.json());
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };
  render() {
    // console.log(this.props.user.message);
    const name = this.props.user.userData.username;
    let message = this.state.message.map((message, index) =>
      name !== message.username ? (
        <ChatMessage
          className="otherusers"
          key={index}
          message={message.message}
          name={message.username}
          time={message.created_at}
        />
      ) : (
        <UserMessage
          className="currentuser"
          key={index}
          message={message.message}
          name={message.username}
          time={message.created_at}
        />
      )
    );
    return (
      <div className="wrappergame">
        <div className="chatbox">{message}</div>

        <ChatInput
          ws={this.ws}
          onSubmitMessage={(messageString) => this.submitMessage(messageString)}
        />
      </div>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser })(GameChat);
// export default Chat;
