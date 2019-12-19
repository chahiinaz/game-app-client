import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);
    return (
      <div>
        <nav>
          <Link to="/signup">Sign up</Link>
        </nav>
        <nav>
          <Link to="/login">Log in</Link>
        </nav>
        <nav>
          <Link to="/">Start a new lobby!</Link>
        </nav>

        <nav>
          {this.props.data.name && (
            <p> {this.props.data.name} you are logged in</p>
          )}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("reduxState in toolbar", reduxState);
  return {
    data: reduxState.auth
  };
}
export default connect(mapStateToProps)(Toolbar);
