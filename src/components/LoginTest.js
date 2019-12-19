import React from "react";
import { connect } from "react-redux";
import { login } from "../login/actions";
import LoginContainer from "./LoginContainer";

class LoginTest extends React.Component {
  state = {
    name: "",
    password: ""
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(login(this.state.name, this.state.password));
  };
  render() {
    return (
      <div>
        <LoginContainer
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          // value={this.state}
        />
      </div>
    );
  }
}

export default connect()(LoginTest);
