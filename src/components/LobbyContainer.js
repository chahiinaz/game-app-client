import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Lobby extends Component {
  state = {
    text: ""
  };
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  reset = () => {
    this.setState({ text: "" });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
      this.reset();
      console.log("response test", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };
  render() {
    console.log("this.props", this.props);
    const { gameRoom } = this.props;
    const list = gameRoom.map(gameRoom => (
      <p key={gameRoom.id}>{gameRoom.name}</p>
    ));
    if (!this.props.jwt) {
      return (
        <div>
          <Link to="/signup">
            <h2>Please sign up to enter lobby</h2>
          </Link>
          <Link to="/login">
            <h2>Login if you already have an account</h2>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>submit</button>
        </form>
        <div>{list}</div>
      </div>
    );
  }
}
function mapStateToProps(reduxstate) {
  console.log("app reduxstate", reduxstate);
  return {
    gameRoom: reduxstate.lobbyReducer,
    jwt: reduxstate.loginReducer.jwt
  };
}

export default connect(mapStateToProps)(Lobby);
