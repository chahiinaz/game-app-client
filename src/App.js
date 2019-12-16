import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import Login from "./components/Login";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}
