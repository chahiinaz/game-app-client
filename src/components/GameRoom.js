import React, { Component } from "react";
import { connect } from "react-redux";

class LobbyList extends Component {
  url = "http://localhost:4000";
  stream = new EventSource(
    `${this.url}/gameroom/${this.props.match.params.id}`
  );

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
      console.log("action", action);
    };
  }

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
              <button>click to join room</button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(reduxstate) {
  console.log("reduxState gameroom", reduxstate);
  return {
    gameRooms: reduxstate.lobbyReducer
  };
}
export default connect(mapStateToProps)(LobbyList);
