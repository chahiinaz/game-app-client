import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
