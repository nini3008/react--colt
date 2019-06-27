import React, { Component } from "react";

import Box from "./Box";
import BoxList from "./BoxList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BoxList />
        <Box height={20} width={10} />
      </div>
    );
  }
}

export default App;
