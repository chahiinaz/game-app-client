import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";

class Game extends Component {
  onClick = async gameroomId => {
    try {
      const response = await superagent.put(`${this.joinUrl}/choice`).send({
        gameroomId,
        userId: this.props.user.id,
        choice: this.props.choice
      });

      console.log("response test: ", response);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <button>Defect</button>
        <button>Cooperate</button>
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
