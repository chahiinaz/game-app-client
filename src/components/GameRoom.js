import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import superagent from "superagent";

class LobbyList extends Component {
  url = `http://localhost:4000/gameroom/${this.props.match.params.id}`;
  joinUrl = `http://localhost:4000`;

  async componentDidMount() {
    try {
      await fetch(this.url);
    } catch (error) {
      console.warn("error test:", error);
    }
  }
  onClick = async gameroomId => {
    // console.log(
    //   "this button does something! and this is the id: ",
    //   this.props.user.id
    // );
    try {
      const response = await superagent.put(`${this.joinUrl}/join`).send({
        gameroomId,
        userId: this.props.user.id
      });

      console.log("response test: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const title = "Do you wanna play a game?";
    const { gameRooms } = this.props;
    // console.log("gameroom props", gameRooms);
    return (
      <div>
        <h1>{title}</h1>
        {gameRooms.map((gameroom, index) => {
          return (
            <div key={index}>
              <h2>Gameroom name: {gameroom.name}</h2>
              <h1>id: {gameroom.id}</h1>
              <Link to={`/choice`}>
                <button onClick={() => this.onClick(gameroom.id)}>
                  Join Room
                </button>{" "}
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
    gameRooms: reduxstate.lobbyReducer,
    user: reduxstate.auth
  };
}
export default connect(mapStateToProps)(LobbyList);
