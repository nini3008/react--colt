import React, { Component } from "react";
//import Button from "./Button";
import Clicker from "./Clicker";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameover: false
    };
  }

  render() {
    return (
      <div className="game">
        <Clicker />
      </div>
    );
  }
}

export default Game;
