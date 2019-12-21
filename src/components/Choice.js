import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";

class Game extends Component {
  url = `http://localhost:4000`;

  onClickDefect = async event => {
    try {
      event.persist();
      const response = await superagent.put(`${this.url}/choice`).send({
        userId: this.props.user.id,
        choice: false
      });
      console.log("response test1: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  onClickCooperate = async event => {
    try {
      event.persist();
      const response = await superagent.put(`${this.url}/choice`).send({
        userId: this.props.user.id,
        choice: true
      });
      console.log("response test2: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickDefect}>Defect</button>
        <button onClick={this.onClickCooperate}>Cooperate</button>
      </div>
    );
  }
}

function mapStateToProps(reduxstate) {
  console.log("reduxState choice", reduxstate);
  return {
    gameRooms: reduxstate.lobbyReducer,
    user: reduxstate.auth
  };
}
export default connect(mapStateToProps)(Game);
