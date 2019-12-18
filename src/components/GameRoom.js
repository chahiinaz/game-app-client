import React, { Component } from "react";
import { connect } from "react-redux";

class LobbyList extends Component {
  render() {
    const title = "Do you wanna play a game?";
    const { gameRooms } = this.props;
    console.log("gameroom props", gameRooms);
    return (
      <div>
        <h1>{title}</h1>
        {gameRooms.map((gameroom, index) => {
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
    gameRooms: reduxstate.lobbyReducer
  };
}
export default connect(mapStateToProps)(LobbyList);
