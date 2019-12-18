import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LobbyList extends Component {
  url = `http://localhost:4000/gameroom/${this.props.match.params.id}`;

  async componentDidMount() {
    try {
      await fetch(this.url);
    } catch (error) {
      console.warn("error test:", error);
    }
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
              <Link to to={`/game`}>
                <button>click to join room</button>
              </Link>
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
