import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../signup/actions";

class SignUp extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(signUp(this.state.name, this.state.password));
  };

  render() {
    console.log("states", this.state);
    return (
      <div>
        <h1>Signup here!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              placeholder="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />

            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SignUp);
