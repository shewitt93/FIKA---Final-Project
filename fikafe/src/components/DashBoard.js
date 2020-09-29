import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../Actions/actions";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return <div>home</div>;
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser })(DashBoard);
