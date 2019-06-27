import React, { Component } from "react";

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
      </div>
    );
  }
}

export default App;
