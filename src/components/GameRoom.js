import React, { Component } from "react";
import { connect } from "react-redux";

class LobbyList extends Component {
  // url = "http://localhost:4000/gameroom";
  // stream = new EventSource(`${this.url}/${this.props.gameRoom.id}`);
  render() {
    const title = "Do you wanna play a game?";
    const { gameRoom } = this.props;
    console.log("gameroom props", gameRoom.id);
    return (
      <div>
        <h1>{title}</h1>
        {gameRoom.map((gameroom, index) => {
          return (
            <div key={index}>
              <h2>Gameroom name: {gameroom.name}</h2>
              <h1>id: {gameroom.id}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxstate) {
  // console.log("reduxState", reduxState);
  return {
    gameRoom: reduxstate.lobbyReducer
  };
}
export default connect(mapStateToProps)(LobbyList);
