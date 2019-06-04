import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameover: false
    };
  }
  // state = {
  //   score: 0,
  //   gameover: false
  // };
  render() {
    return (
      <div className="game">
        <p>Your score is: {this.state.score}</p>
      </div>
    );
  }
}

export default Game;
