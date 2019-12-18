import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Lobby extends Component {
  state = {
    text: "",
    gamerooms: []
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
    const {
      target: { value }
    } = event;
    this.setState({ text: value });
  };

  onClick = async gameroomId => {
    console.log("this button does something! and this is the id: ", gameroomId);
    try {
      const response = await superagent.put(`${this.url}/join`).send({
        gameroomId,
        userId: 1
      });

      console.log("response test: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // console.log("this.props", this.props);
    const { gameRoom } = this.props;
    const list = gameRoom.map(gameroom => (
      <div key={gameroom.id}>
        {gameroom.name}
        <button onClick={() => this.onClick(gameroom.id)}>Join Room</button>
      </div>
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
  // console.log("app reduxstate", reduxstate);
  return {
    gameRoom: reduxstate.lobbyReducer,
    jwt: reduxstate.auth.jwt
  };
}

export default connect(mapStateToProps)(Lobby);
