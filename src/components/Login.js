import React from "react";
import { connect } from "react-redux";
import { login } from "../login/actions";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    name: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("it works", this.props);
    this.props.dispatch(login(this.state.name, this.state.password));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.data.jwt) {
      this.props.history.push("/");
    }
    return (
      <div>
        <h1>Login here!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <div>
          <nav>
            Don't have an account?
            <br />
            <Link to="/">Click here to sign up!</Link>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("ReduxState in login: ", reduxState);
  return {
    data: reduxState.auth
  };
}

export default connect(mapStateToProps)(LoginPage);
