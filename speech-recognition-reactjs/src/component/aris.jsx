import React, { Component } from "react";
import DisplayContainer from "./displayContainer";
import Communicator from "./communicator";

class Aris extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Communicator />
        <DisplayContainer />
      </React.Fragment>
    );
  }
}

export default Aris;
