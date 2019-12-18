import React, { Component } from "react";
import { connect } from "react-redux";

class LobbyList extends Component {
  // url = "http://localhost:4000/gameroom";
  // stream = new EventSource(`${this.url}/${this.props.gameRoom.id}`);

  // componentDidMount() {
  //   this.stream.onmessage = event => {
  //     const { data } = event;
  //     const action = JSON.parse(data);
  //     this.props.dispatch(action);
  //     console.log("action", action);
  //   };
  // }
  render() {
    console.log("gameroom props", this.props.gameRoom);
    const title = "Do you wanna play a game?";
    const { gameRoom } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {gameRoom.map((gameroom, index) => {
          return (
            <div key={index}>
              <h2>{gameroom.name}</h2>
              <h1>{gameroom.id}</h1>
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
