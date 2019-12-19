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

  render() {
    const { gameRooms } = this.props;
    const list = gameRooms.map(gameroom => (
      <p key={gameroom.id}>
        <Link to={`/gameroom/${gameroom.id}`}>{gameroom.name}</Link>
      </p>
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
    const loading = !this.props.gameRooms;
    // console.log("app props", this.props.gameRooms);

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                onChange={this.onChange}
                value={this.state.text}
              />
              <button>submit</button>
            </form>
            <h2>Click on the title to see gameroom</h2>
            {list}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxstate) {
  // console.log("lobbycontainer reduxstate", reduxstate);
  return {
    gameRooms: reduxstate.lobbyReducer,
    jwt: reduxstate.auth.jwt
  };
}

export default connect(mapStateToProps)(Lobby);
