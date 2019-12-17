import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";

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
    gameRoom: reduxstate.lobbyReducer
  };
}

export default connect(mapStateToProps)(Lobby);
