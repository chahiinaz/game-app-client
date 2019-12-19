import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import { connect } from "react-redux";
import LobbyContainer from "./components/LobbyContainer";
import GameRoom from "./components/GameRoom";
import Choice from "./components/Choice";
import LoginContainer from "./components/LoginContainer";

class App extends React.Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={LobbyContainer} />
          <Route exact path="/gameroom/:id" component={GameRoom} />
          <Route exact path="/choice" component={Choice} />
          <Route exact path="/test" component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
