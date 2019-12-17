import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../signup/actions";
import { Link } from "react-router-dom";

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
    if (this.props.data.jwt) {
      return <p>Signed up succesfully!</p>;
    }
    return (
      <div>
        <h1>Signup here!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                name="name"
                placeholder="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </p>
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <p>
              <input type="submit" />
            </p>
          </form>
        </div>
        <div>
          <nav>
            Already have an account?
            <br />
            <Link to="/login">Click here to log in!</Link>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("reduxState in signup:", reduxState);
  return {
    data: reduxState.signUpReducer
  };
}

export default connect(mapStateToProps)(SignUp);
