import React, { Component } from "react";
import Die from "./Die";

class Roll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false
    };
  }

  roll = () => {
    const newdie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newdie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({
      die1: newdie1,
      die2: newdie2,
      rolling: true
    });
    setTimeout(() => {
      this.setState({
        rolling: false
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Die face={this.state.die1} rolling={this.state.rolling} />
        <Die face={this.state.die2} rolling={this.state.rolling} />
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default Roll;
