import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import superagent from "superagent";

export default class App extends React.Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  state = {
    text: ""
  };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log(action);
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
      console.log("response test", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
